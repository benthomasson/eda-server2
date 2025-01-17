import {TabItemType} from "@app/shared/types/common-types";

export function accessibleRouteChangeHandler() {
  return window.setTimeout(() => {
    const mainContainer = document.getElementById('primary-app-container');
    if (mainContainer) {
      mainContainer.focus();
    }
  }, 50);
}

export async function removeData(url = '') {
  const response = await fetch(url, {
    method: 'DELETE',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer'
  });
}

export async function postData(url = '', data = {}) {
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data)
  });
  if (response.ok) {
    return response.json()
  }
  console.log('Debug - response: ', response);
  throw new Error( `${response?.status} - ${response?.statusText}`);
}

export async function patchData(url = '', data = {}) {
  const response = await fetch(url, {
    method: 'PATCH',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data)
  });
  if (response.ok) {
    return response.json()
  }
  throw new Error( `${response?.status} - ${response?.statusText}`);
}

export function getServer() {
    return window.location.hostname + ":" + window.location.port
}

export const getTabFromPath = (tabs:TabItemType[], path:string):string | undefined => {
  const currentTab=tabs.find((tabItem) => tabItem.name.split('/').pop() === path.split('/').pop());
  return currentTab?.title;
};
