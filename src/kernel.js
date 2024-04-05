
  import {marked} from 'marked';
  import katex from 'katex';
  import autorender from 'katex/contrib/auto-render'

  const markedLoader = async (self) => {
    self["default"] = marked;
  }


  const katexLoader = async (self) => {
    self["default"] = katex;
    self["autorender"] = autorender;
  }  

  new interpretate.shared(
    "katex",
    katexLoader
  );  

  new interpretate.shared(
    "marked",
    markedLoader
  );    
