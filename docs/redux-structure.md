As a friendly reminder, the purpose of this document is to be able to, in the course of a redux cycle, *trace an action starting with where it was invoked, through the API/reducer involved, and finally to the components that update as a result*.


## Mix Cycles

### Mix Api Request Actions

* `fetchAllMixes`
 + invoked from `MixesIndex` `onEnter` hook
 + `GET /api/mixes` called
 + `receiveAllMixes` is set as the success callback

* `createMix`
 + invoked from new mix button `onClick`
 + `POST api/mixes/` is called
 + `receiveSingleMix` is set as success callback

* `updateMix`
 + invoked from `MixForm` `onSubmit`
  + `POST /api/mixes` is called
	+ `receiveSingleMix` is set as success callback

* `destroyMix`
 + invoked from delete mix button `onClick`
 + `DELETE /api/mixes/:id` is called

### Mix Api Response Actions

* `receiveAllMixes`
 + invoked from API callback
  + the `MixReducer` updates `mixes` in the application state
* `receiveSingleMix`
 + invoked from API callback
 + the `MixReducer` updates mixes[id] in application state
* `removeMix`
 + invoked from API callback
 + the `MixReducer` removes mixes[id] from the application state



## Auth Cycles

### Request Actions

* `signUp`
 + invoked from `SignupForm` `onSubmit`
 + `POST /api/users` called
 + `receiveCurrentUser` set as success callback
* `logIn`
 + invoked from `authForm` `onSubmit`
 + `POST /api/session` is called
 + `receiveCurrentUser`is set as success callback
* `logout`
 + invoked from `Navbar` `onClick`
 + `DELETE /api/session` is called
 + `removeCurrentUser` set as succes callback
* 'fetchCurrentUser'
 + invoked from `App` in `didMount`
 + `GET /api/session` is called
 + `receiveCurrentUser` is set as success callback

### Response Actions
* `receiveCurrentUser`
 + invoked from API callback
 + the `SessionReducer` stores `currentUser` in applications state
* `removeCurrentUser`
 + invoked from an API callback
 + the `SessionReducer` removes `currentUser` from application state

## Error Cycles
* `setErrors`
 + invoked from API callbacks on error for actions that generate Post requests
 + the `ErrorReducer` stores the `form` in the application state, `errors` are mapped to their respective forms
* `removeErrors`
 + invoked from API callbacks on success for actions that generate POST requests
 + the `ErrorReducer` removes `errors` for a given `form` in the application state
