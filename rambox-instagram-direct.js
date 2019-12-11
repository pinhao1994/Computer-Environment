function applycss(css){
  var head = document.getElementsByTagName('head')[0];
  var s = document.createElement('style');
  s.setAttribute('type', 'text/css');
  s.appendChild(document.createTextNode(css));
  head.appendChild(s);
}
applycss(`
div.uueGX {
	background: #181818 !important;
}

header._9ezyW  {
	background: #10162b !important;
}

header div.KV-D4, div.CMoMH span {
	color: white !important;
}

div._6FEQj span {
	color: rgba(0, 0, 0, 0.75) !important;
}

svg {
	fill: white !important;
}

h1.K3Sf1 {
	color: white !important;
}

div.N9abW, div.N9abW div {
	background: #181818 !important;
	color: white !important;
	border-color: #CCCCCC !important;
}

textarea {
  color: white !important;
}
`);
