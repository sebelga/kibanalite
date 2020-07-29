import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

const params = {
  element: document.getElementById("app"),
  setBreadcrumbs() {},
  history
}

export const management = {
  sections: {
    section: {
      data: {
        registerApp({ mount }: any) {
          mount(params);
        },
      },
    },
  },
};
