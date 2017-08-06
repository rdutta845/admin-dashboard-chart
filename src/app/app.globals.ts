import {Injectable} from '@angular/core';

@Injectable()
export default class globalData {

  
  iframeUrl:any = "anant";
  pages:any = {
  "introduction": {
    "title": "anant",
    "layout": "tab",
    "section": [
      {
        "url": "http://www.youtube.com/embed/Df1GgSS8nYM",
        "title": "Welcome to SSD Advisor",
        "type": "video",
        "height": "500px"
      },
      {
        "url": "https://docs.google.com/document/d/1K8CgGiBL5I094kqL23B4clQJ285ceZqnExCLSLuQVsM/pub",
        "title": "Welcome to SSD Advisor",
        "type": "iframe",
        "height": "1500"
      }
    ]
  },
  "how-to-start": {
    "title": "anant",
    "layout": "box",
    "section": [
      {
        "url": "https://docs.google.com/document/d/1K8CgGiBL5I094kqL23B4clQJ285ceZqnExCLSLuQVsM/pub",
        "title": "Welcome to SSD Advisor",
        "type": "iframe",
        "height": "100%"
      },
      {
        "url": "https://docs.google.com/document/d/1K8CgGiBL5I094kqL23B4clQJ285ceZqnExCLSLuQVsM/pub",
        "title": "Welcome to SSD Advisor",
        "type": "iframe",
        "height": "100%"
      }
    ]
  }
}

  

}
