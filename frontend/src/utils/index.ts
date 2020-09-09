export const redirectTo = (route: string): void => {
  if (window.location.pathname !== route) {
    window.location.pathname = route
  }
}
