var CVSSseveritys=[{name:"NONE",bottom:0,top:0},{name:"LOW",bottom:.1,top:3.9},{name:"MEDIUM",bottom:4,top:6.9},{name:"HIGH",bottom:7,top:8.9},{name:"CRITICAL",bottom:9,top:10}];function CVSSseverity(score){var i;var severityRatingLength=this.CVSSseveritys.length;for(i=0;i<severityRatingLength;i++){if(score>=this.CVSSseveritys[i].bottom&&score<=this.CVSSseveritys[i].top){return this.CVSSseveritys[i]}}return{name:"?",bottom:"Not",top:"defined"}}function CVSScalculate(cvss){var cvssVersion="3.0";var exploitabilityCoefficient=8.22;var scopeCoefficient=1.08;var Weight={attackVector:{NETWORK:.85,ADJACENT_NETWORK:.62,LOCAL:.55,PHYSICAL:.2},attackComplexity:{HIGH:.44,LOW:.77},privilegesRequired:{UNCHANGED:{NONE:.85,LOW:.62,HIGH:.27},CHANGED:{NONE:.85,LOW:.68,HIGH:.5}},userInteraction:{NONE:.85,REQUIRED:.62},scope:{UNCHANGED:6.42,CHANGED:7.52},confidentialityImpact:{NONE:0,LOW:.22,HIGH:.56},integrityImpact:{NONE:0,LOW:.22,HIGH:.56},availabilityImpact:{NONE:0,LOW:.22,HIGH:.56}};var p;var val={},metricWeight={};try{for(p in Weight){val[p]=cvss[p];if(typeof val[p]==="undefined"||val[p]===""){return"?"}metricWeight[p]=Weight[p][val[p]]}}catch(err){return err}metricWeight.privilegesRequired=Weight.privilegesRequired[val.scope][val.privilegesRequired];try{var baseScore;var impactSubScore;var exploitabalitySubScore=exploitabilityCoefficient*metricWeight.attackVector*metricWeight.attackComplexity*metricWeight.privilegesRequired*metricWeight.userInteraction;var impactSubScoreMultiplier=1-(1-metricWeight.confidentialityImpact)*(1-metricWeight.integrityImpact)*(1-metricWeight.availabilityImpact);if(val.scope==="UNCHANGED"){impactSubScore=metricWeight.scope*impactSubScoreMultiplier}else{impactSubScore=metricWeight.scope*(impactSubScoreMultiplier-.029)-3.25*Math.pow(impactSubScoreMultiplier-.02,15)}if(impactSubScore<=0){baseScore=0}else{if(val.scope==="UNCHANGED"){baseScore=Math.min(exploitabalitySubScore+impactSubScore,10)}else{baseScore=Math.min((exploitabalitySubScore+impactSubScore)*scopeCoefficient,10)}}baseScore=Math.ceil(baseScore*10)/10;return baseScore}catch(err){return err}}var output=document.getElementById("output");var starting_value={};var sourceEditor=ace.edit("output");sourceEditor.getSession().setMode("ace/mode/json");sourceEditor.setOptions({maxLines:480,wrap:true});sourceEditor.$blockScrolling=Infinity;var vectorMap={attackVector:"AV",attackComplexity:"AC",privilegesRequired:"PR",userInteraction:"UI",scope:"S",confidentialityImpact:"C",integrityImpact:"I",availabilityImpact:"A"};function cvssUpdate(){cveEditor.unwatch("root.impact.cvss");var cvssEditor=cveEditor.getEditor("root.impact.cvss");if(cvssEditor){var c=cvssEditor.getValue();var vectorString="CVSS:"+cveEditor.getEditor("root.impact.cvss.version").getValue();var sep="/";for(var m in c){if(vectorMap[m]){vectorString+=sep+vectorMap[m]+":"+c[m].charAt(0)}}c.baseScore=CVSScalculate(c);c.vectorString=vectorString;c.baseSeverity=CVSSseverity(c.baseScore).name;cvssEditor.setValue(c)}cveEditor.watch("root.impact.cvss",cvssUpdate)}function syncContents(){var j=cveEditor.getValue();sourceEditor.getSession().setValue(JSON.stringify(j,null,2));sourceEditor.clearSelection();document.getElementById("yaml").innerHTML=YAML.stringify(j,20,2);document.getElementById("advisory").innerHTML=window.advisoryTemplate(j);document.getElementById("mitreweb").innerHTML=window.mitrewebTemplate(j);document.getElementById("cvejson").innerHTML=textUtil.getMITREJSON(textUtil.reduceJSON(j))}JSONEditor.defaults.resolvers.unshift(function(schema){if(schema.type==="string"&&schema.format==="radio"){return"radio"}});JSONEditor.defaults.editors.radio=JSONEditor.AbstractEditor.extend({setValue:function(value,initial){value=this.typecast(value||"");var sanitized=value;if(this.schema.enum.indexOf(sanitized)<0){sanitized=this.schema.enum[0]}if(this.value===sanitized){return}var self=this;for(var input in this.inputs){if(input===sanitized){this.inputs[input].checked=true;self.value=sanitized;self.jsoneditor.notifyWatchers(self.path);return false}}},register:function(){this._super();if(!this.inputs)return;for(var i=0;i<this.inputs.length;i++){this.inputs[i].setAttribute("name",this.formname)}},unregister:function(){this._super();if(!this.inputs)return;for(var i=0;i<this.inputs.length;i++){this.inputs[i].removeAttribute("name")}},getNumColumns:function(){var longest_text=this.getTitle().length;for(var i=0;i<this.schema.enum.length;i++){longest_text=Math.max(longest_text,this.schema.enum[i].length+4)}return Math.min(12,Math.max(longest_text/7,2))},typecast:function(value){if(this.schema.type==="boolean"){return!!value}else if(this.schema.type==="number"){return 1*value}else if(this.schema.type==="integer"){return Math.floor(value*1)}else{return""+value}},getValue:function(){return this.value},removeProperty:function(){this._super();for(var i=0;i<this.inputs.length;i++){this.inputs[i].style.display="none"}if(this.description)this.description.style.display="none";this.theme.disableLabel(this.label)},addProperty:function(){this._super();for(var i=0;i<this.inputs.length;i++){this.inputs[i].style.display=""}if(this.description)this.description.style.display="";this.theme.enableLabel(this.label)},sanitize:function(value){if(this.schema.type==="number"){return 1*value}else if(this.schema.type==="integer"){return Math.floor(value*1)}else{return""+value}},build:function(){var self=this,i;if(!this.options.compact)this.header=this.label=this.theme.getFormInputLabel(this.getTitle());if(this.schema.description)this.description=this.theme.getFormInputDescription(this.schema.description);this.select_options={};this.select_values={};var e=this.schema.enum||[];var options=[];for(i=0;i<e.length;i++){if(this.sanitize(e[i])!==e[i])continue;options.push(e[i]+"");this.select_values[e[i]+""]=e[i]}this.input_type="radiogroup";this.inputs={};this.controls={};for(i=0;i<options.length;i++){this.inputs[options[i]]=this.theme.getRadio();this.inputs[options[i]].setAttribute("value",options[i]);this.inputs[options[i]].setAttribute("name",this.formname);this.inputs[options[i]].setAttribute("id",this.formname+options[i]);var label=this.theme.getRadioLabel(this.schema.enumTitles&&this.schema.enumTitles[options[i]]?this.schema.enumTitles[options[i]]:options[i]);label.setAttribute("for",this.formname+options[i]);label.setAttribute("class",options[i]);this.controls[options[i]]=this.theme.getFormControl(this.inputs[options[i]],label)}this.control=this.theme.getRadioGroupHolder(this.controls,this.label,this.description);this.container.appendChild(this.control);this.control.addEventListener("change",function(e){e.preventDefault();e.stopPropagation();var val=e.target.value;var sanitized=val;if(self.schema.enum.indexOf(val)===-1){sanitized=self.schema.enum[0]}self.value=sanitized;if(self.parent)self.parent.onChildEditorChange(self);else self.jsoneditor.onChange();self.jsoneditor.notifyWatchers(self.path)})},enable:function(){if(!this.always_disabled){for(var i=0;i<this.inputs.length;i++){this.inputs[i].disabled=false}}this._super()},disable:function(){for(var i=0;i<this.inputs.length;i++){this.inputs[i].disabled=true}this._super()},destroy:function(){if(this.label)this.label.parentNode.removeChild(this.label);if(this.description)this.description.parentNode.removeChild(this.description);for(var i=0;i<this.inputs.length;i++){this.inputs[i].parentNode.removeChild(this.inputs[i])}this._super()}});JSONEditor.defaults.editors.object=JSONEditor.defaults.editors.object.extend({layoutEditors:function(){var propertyNumber=1;for(let key of Object.keys(this.editors)){let schema=this.editors[key].schema;if(!schema.propertyOrder){schema.propertyOrder=propertyNumber}++propertyNumber}this._super()}});JSONEditor.defaults.themes.custom=JSONEditor.AbstractTheme.extend({getFormInputLabel:function(text){var el=this._super(text);el.className=text;return el},getFormInputDescription:function(text){var el=this._super(text);return el},getIndentedPanel:function(){var el=this._super();el.style="";return el},getChildEditorHolder:function(){var el=this._super();return el},getHeaderButtonHolder:function(){var el=this.getButtonHolder();return el},getHeader:function(text){var el=document.createElement("h3");if(typeof text==="string"){el.textContent=text;el.className=text}else{text.className=text.textContent;el.appendChild(text)}return el},getTable:function(){var el=this._super();return el},addInputError:function(input,text){input.style.borderColor="coral";if(!input.errmsg){var group=this.closest(input,".form-control");input.errmsg=document.createElement("div");input.errmsg.setAttribute("class","errmsg");input.errmsg.style=input.errmsg.style||{};group.appendChild(input.errmsg)}else{input.errmsg.style.display="block"}input.errmsg.innerHTML="";input.errmsg.appendChild(document.createTextNode(text))},removeInputError:function(input){input.style.borderColor="";if(input.errmsg)input.errmsg.style.display="none"},getRadio:function(){var el=this.getFormInputField("radio");return el},getRadioGroupHolder:function(controls,label,description){var el=document.createElement("div");var radioGroup=document.createElement("div");radioGroup.className="radiogroup";if(label){label.style.display="inline-block";el.appendChild(label)}el.appendChild(radioGroup);for(var i in controls){if(!controls.hasOwnProperty(i))continue;radioGroup.appendChild(controls[i])}if(description)el.appendChild(description);return el},getRadioLabel:function(text){var el=this.getFormInputLabel(text);return el},getProgressBar:function(){var max=100,start=0;var progressBar=document.createElement("progress");progressBar.setAttribute("max",max);progressBar.setAttribute("value",start);return progressBar},updateProgressBar:function(progressBar,progress){if(!progressBar)return;progressBar.setAttribute("value",progress)},updateProgressBarUnknown:function(progressBar){if(!progressBar)return;progressBar.removeAttribute("value")}});var cveEditor=new JSONEditor(document.getElementById("editor"),{ajax:true,theme:"custom",disable_collapse:true,disable_array_reorder:true,disable_properties:true,disable_edit_json:true,disable_array_delete_last_row:true,disable_array_delete_all_rows:true,expand_height:true,input_width:"3em",input_height:"4em",schema:CVEschema});cveEditor.getEditor("root.impact.cvss.version").disable();cveEditor.getEditor("root.impact.cvss.vectorString").disable();cveEditor.getEditor("root.impact.cvss.baseScore").disable();cveEditor.getEditor("root.impact.cvss.baseSeverity").disable();if(cveEntry){cveEditor.setValue(cveEntry.cve)}cvssUpdate();syncContents();function cveEditorValid(){var errors=cveEditor.validate();if(errors.length){cveEditor.setOption("show_errors","always");message.className="error";message.textContent="Errors found, please correct!";return false}else{message.textContent="";return true}}function source2cve(){var result=JSON.parse(sourceEditor.getSession().getValue());cveEditor.setValue(result)}function sourceEditorValid(){try{var hasError=false;var firsterror=null;var annotations=sourceEditor.getSession().getAnnotations();for(var l in annotations){var annotation=annotations[l];if(annotation.type==="error"){hasError=true;firsterror=annotation;break}}if(!hasError){return true}else{sourceEditor.moveCursorTo(firsterror.row,firsterror.column,false);sourceEditor.clearSelection();message.className="error";message.textContent="Please fix error: "+firsterror.text;document.getElementById("tab-2").checked=true;return false}}catch(err){message.className="error";message.textContent=err.message;document.getElementById("tab-2").checked=true;return false}finally{}}function save(){if(document.getElementById("tab-2").checked){if(!sourceEditorValid()){return}else{source2cve()}}if(!cveEditorValid()){document.getElementById("tab-1").checked=true;return}message.className="green";message.textContent="Saving...";var e=cveEditor.getValue();fetch("/cves/"+e.CVE_data_meta.ID,{method:"POST",credentials:"include",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json"},redirect:"error",body:JSON.stringify(e)}).then(function(response){if(!response.ok){throw Error(response.statusText)}return response.json()}).then(function(responseAsJson){message.className="green";message.textContent="Saved!"}).catch(function(error){message.className="error";message.textContent=error+" Try reloadin the page"})}if(document.getElementById("save1")&&document.getElementById("save2")){document.getElementById("save1").addEventListener("click",save);document.getElementById("save2").addEventListener("click",save);document.getElementById("save2").removeAttribute("style")}if(document.getElementById("remove")){document.getElementById("remove").addEventListener("click",function(){var e=cveEditor.getValue();if(confirm("Delete "+e.CVE_data_meta.ID+"?")){fetch("/cves/"+e.CVE_data_meta.ID,{method:"DELETE",credentials:"include"}).then(function(response){if(response.status==200){message.className="green";message.textContent="Deleted ";window.location="/cves/"}else{message.className="green";message.textContent="Error "+response.statusText}})}})}var autoButton=document.getElementById("auto");var descDiv=document.querySelector('[data-schemapath="root.description.description_data"] div ');if(descDiv){descDiv.append(autoButton);autoButton.removeAttribute("style")}autoButton.addEventListener("click",function(){var d=cveEditor.getEditor("root.description.description_data");var cve=cveEditor.getValue();desc=d.getValue();if(d){var i=desc.length;while(i--){if(desc[i].value.length===0){desc.splice(i,1)}}desc.push({lang:"eng",value:"A "+cve.problemtype.problemtype_data[0].description[0].value+" vulnerability in ____COMPONENT____ of "+textUtil.getProductList(cve)+" allows ____ATTACKER/ATTACK____ to cause ____IMPACT____."});desc.push({lang:"eng",value:"Affected releases are "+textUtil.getAffectedProductString(cve)+"."});d.setValue(desc)}else{}});cveEditor.watch("root.impact.cvss",cvssUpdate);function setupDeselectEvent(){var selected="tab-1";for(var t of document.getElementsByName("tabs")){t.addEventListener("change",function(){clicked=this.id;if(selected!=clicked){switch(selected){case"tab-1":cveEditorValid();syncContents();break;case"tab-2":if(sourceEditorValid()){source2cve();cveEditorValid();syncContents()}else{clicked="tab-2";document.getElementById("tab-2").checked=true}break;default:syncContents()}}selected=clicked})}}setupDeselectEvent();