angular.module('app-templates', []).run([
  '$templateCache',
  ($templateCache: any) => {
    function requireAll(requireContext: any) {
      return requireContext.keys().map((val: any) => {
        return {
          tpl: requireContext(val),
          name: `${val.split('/').pop()}`,
        };
      });
    }

    let modules = requireAll(
      //@ts-ignore
      require.context('./app', true, /^(?:(?!\.component).)*\.html$/)
    );
    modules.forEach((val: any) => {
      $templateCache.put(val.name, val.tpl);
    });
  },
]);
