const { ipcRenderer } = require('electron')

const getState = async () => {
  const res = await ipcRenderer.invoke("getState");
  console.log("getState => ", res)
  return res;
}

const setState = async (state) => {
  const res = await ipcRenderer.invoke("setState", state);
  console.log("setState => ", res)
  return res;
}

const resetState = async () => {
  const res = await ipcRenderer.invoke("resetState");
  console.log("resetState => ", res)
  return res;
}

export {
  getState,
  setState,
  resetState,
}