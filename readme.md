crete react app taakes time and is crowded.
 vite makes simple only give imp libraries.
 react dom for web and react native for mobile.
 in vite if no node_modules then check with ls or dir and do npm install.
 read package.json for scripts, dev dependencies (dont go to client) and a lot.
 npm run dev to run site.
 vite me .jsx hi likhna pdega especially if jsx(html) return kro ,in create react .js/.jsx both work.
  fn that are components only or tag name starts with capital in vite and create react.
  file name start with capital is good practice.
  in jsx only one element can be return so use fragment <></>.
  in vite script add direct in createreact readscripts in package.json do it.
script run through react and react dom gives methods and create virtual dom.
spa as just one html page with one div root usime inject kr rhe h hta rhe h.
  **own react** (object of element and own render likho in react render expects an element so cant pass this object can even execute fn but dont do react.createlement can use and for js variables use {} in fn and in createelement write at last it can only be an evaluated expression as at the end it will be an object which can hv if and loops and then parsed to tree.  at bts babble injects the create element can also be done with jsx.)

  variable change hone se ui nhi change hoga wo react decide krega use hooks.
  react dont watch normal variables they are in js memory and reset at each render but using setstate var are stored in hook memory outside our component fn the state is like memory of ui when it changes using setstate this tells react to create vdom and rerender.
  setstate is asynchronous as it waits for event handler to finish, it batches all the state changes to inc.performance and then create vdom for ess. changes and triggers rendering.
  react is declarative.
  react fibre is the engine.
  *features* :"(1)incremental rendering i.e split in chunks and spread over frames prevent freezing in big tasks.(2)hydration(show button add js later.), pause, reuse work, assogn priority, abort update."

  props are object arguments, arg me hi deconstruct kr lo use same jsx bar bar with diff props use them in {}, arg me give default value.

  useEffect jb bhi koi component mount or unmount hota h uska lifecyle trigger hota h tb use . to trigger a fn at page reload.