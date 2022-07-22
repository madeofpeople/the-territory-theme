(()=>{"use strict";const t=window.wp.blocks,e=window.wp.i18n;[{name:"list",title:(0,e.__)("Basic List","the-territory"),description:(0,e.__)("Display a basic list.","the-territory"),isDefault:!0,icon:"editor-ul",attributes:{className:"basic",placeholder:(0,e.__)("Add list items ...","the-territory")},example:{attributes:{className:"basic"}},scope:["block","inserter","transform"],isActive:(t,e)=>t.className===e.className},{name:"bullet-list-columns",title:(0,e.__)("Columned Bullet List","the-territory"),description:(0,e.__)("A list displayed in 2 columns.","the-territory"),attributes:{className:"bullet-list-columns",placeholder:(0,e.__)("Add list items ...","the-territory")},icon:"columns",scope:["transform"],isActive:(t,e)=>t.className===e.className},{name:"bullet-list",title:(0,e.__)("Bullet List","the-territory"),description:(0,e.__)("A regular list, with fancy bullets.","the-territory"),icon:"list-view",attributes:{className:"bullet-list",placeholder:(0,e.__)("Add list items ...","the-territory")},scope:["transform"],isActive:(t,e)=>t.className===e.className},{name:"icon-list",title:(0,e.__)("Icon List","the-territory"),description:(0,e.__)("A regular with icon.","the-territory"),icon:"star-filled",attributes:{className:"icon-list",placeholder:(0,e.__)("Add list items ...","the-territory")},scope:["transform"],isActive:(t,e)=>t.className===e.className}].forEach((e=>{(0,t.registerBlockVariation)("core/list",e)})),[{name:"paragraph",title:(0,e.__)("Paragraph","the-territory"),description:(0,e.__)("A standard paragraph.","the-territory"),isDefault:!0,category:"text",keywords:[(0,e.__)("intro","the-territory"),(0,e.__)("paragraph","the-territory"),(0,e.__)("sentence","the-territory")],icon:"editor-alignleft",attributes:{className:"ptag",placeholder:(0,e.__)("Add content...","the-territory")},example:{attributes:{content:(0,e.__)("This is a bock for displaying the opening paragraph, the big idea, the tl;dr.","the-territory")}},scope:["block","inserter","transform"]},{name:"lede",title:(0,e.__)("Lede","the-territory"),description:(0,e.__)("Add opening sentence or paragraph.","the-territory"),icon:"editor-justify",attributes:{className:"lede",placeholder:(0,e.__)("Add content...","the-territory")},scope:["transform"]}].forEach((e=>{(0,t.registerBlockVariation)("core/paragraph",e)}))})();