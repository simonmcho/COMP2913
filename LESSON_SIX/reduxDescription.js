/*
Redux
02 Apr 2018 » react
What is Redux?
Redux is an application architectural pattern inspired by Facebook’s Flux pattern. 
Redux can also refer to the actual library package, which works as a state container for JavaScript/React apps.

What is Flux?
Flux is an application architectural pattern popularized by Facebook. 
It utilizes a unidirectional data flow, forcing all data to follow the same lifecycle pattern. 
In a client-side application, this means that when a user interacts with a View, 
specific actions are dispatched, which in turn modify a “Store” (which maintains your application state). 
When your Store data changes, the prop values passed to your Components also change, 
triggering a re-render of the most current application state. 
This is different than Angular’s 2-way data-binding, 
where interactions with the View can change state in controllers, 
and controllers can change state in Views.

Redux Concepts
Actions - Payloads of information that send data to your store. 
Example of where they can be used include when a user submits a form, clicks on a button, 
or when a HTTP request has returned with a response. 
Basically, Actions describe that something happened.

Reducers 
- Specify how the application’s state changes in response to an action. 
Example includes when an empty array of todo items has an item added to it, 
or when an http request is pending, and should display a loading spinner.

Store 
- Stores connect actions and dispatchers, 
so that Reducers can run when an action is dispatched.

Exercise
Create a Todo Application, similar to Project 1. Instead of using component state, use Redux instead.
Related Posts
Forms in React (Categories: react)
Lists (Categories: react)
Conditional Rendering (Categories: react)
Event Handlers (Categories: react)
Component Lifecycle (Categories: react)
React State (Categories: react)
*/
