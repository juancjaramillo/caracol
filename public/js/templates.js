this["MyApp"] = this["MyApp"] || {};
this["MyApp"]["templates"] = this["MyApp"]["templates"] || {};
this["MyApp"]["templates"]["template"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <li><a href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"href") || (depth0 != null ? lookupProperty(depth0,"href") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"href","hash":{},"data":data,"loc":{"start":{"line":21,"column":21},"end":{"line":21,"column":29}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"text") || (depth0 != null ? lookupProperty(depth0,"text") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data,"loc":{"start":{"line":21,"column":31},"end":{"line":21,"column":39}}}) : helper)))
    + "</a></li>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <li><a href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"href") || (depth0 != null ? lookupProperty(depth0,"href") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"href","hash":{},"data":data,"loc":{"start":{"line":33,"column":23},"end":{"line":33,"column":31}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"body") || (depth0 != null ? lookupProperty(depth0,"body") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"body","hash":{},"data":data,"loc":{"start":{"line":33,"column":33},"end":{"line":33,"column":41}}}) : helper)))
    + "</a></li>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <button>"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"body") || (depth0 != null ? lookupProperty(depth0,"body") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"body","hash":{},"data":data,"loc":{"start":{"line":44,"column":16},"end":{"line":44,"column":24}}}) : helper)))
    + "</button>\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <li><a href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"href") || (depth0 != null ? lookupProperty(depth0,"href") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"href","hash":{},"data":data,"loc":{"start":{"line":52,"column":21},"end":{"line":52,"column":29}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"body") || (depth0 != null ? lookupProperty(depth0,"body") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"body","hash":{},"data":data,"loc":{"start":{"line":52,"column":31},"end":{"line":52,"column":39}}}) : helper)))
    + "</a></li>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), alias4=container.hooks.helperMissing, alias5="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<!-- src/templates/template.hbs -->\r\n\r\n<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n  <meta charset=\"UTF-8\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n  <link rel=\"stylesheet\" href=\"../css/styles.css\">\r\n  <title>Tu Aplicación Handlebars</title>\r\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.7.7/handlebars.min.js\"></script>\r\n\r\n</head>\r\n<body>\r\n  <header>\r\n   \r\n    <img src=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"logo") : depth0)) != null ? lookupProperty(stack1,"image") : stack1)) != null ? lookupProperty(stack1,"src") : stack1), depth0))
    + "\" alt=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"logo") : depth0)) != null ? lookupProperty(stack1,"alt") : stack1), depth0))
    + "\">\r\n  </header>\r\n  <nav>\r\n    <ul>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias3,((stack1 = (depth0 != null ? lookupProperty(depth0,"navigation") : depth0)) != null ? lookupProperty(stack1,"items") : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":20,"column":6},"end":{"line":22,"column":15}}})) != null ? stack1 : "")
    + "    </ul>\r\n  </nav>\r\n  <main>\r\n    <h1>"
    + alias2(((helper = (helper = lookupProperty(helpers,"headline") || (depth0 != null ? lookupProperty(depth0,"headline") : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"headline","hash":{},"data":data,"loc":{"start":{"line":26,"column":8},"end":{"line":26,"column":20}}}) : helper)))
    + "</h1>\r\n    <p>"
    + alias2(((helper = (helper = lookupProperty(helpers,"subHeadline") || (depth0 != null ? lookupProperty(depth0,"subHeadline") : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"subHeadline","hash":{},"data":data,"loc":{"start":{"line":27,"column":7},"end":{"line":27,"column":22}}}) : helper)))
    + "</p>\r\n\r\n    <!-- Breadcrumbs -->\r\n    <nav>\r\n      <ul>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias3,(depth0 != null ? lookupProperty(depth0,"breadcrumbs") : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":32,"column":8},"end":{"line":34,"column":17}}})) != null ? stack1 : "")
    + "      </ul>\r\n    </nav>\r\n\r\n    <!-- Page Lead Image -->\r\n    <img src=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"pageLead") : depth0)) != null ? lookupProperty(stack1,"image") : stack1)) != null ? lookupProperty(stack1,"src") : stack1), depth0))
    + "\" alt=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"pageLead") : depth0)) != null ? lookupProperty(stack1,"alt") : stack1), depth0))
    + "\">\r\n\r\n    <!-- Acciones -->\r\n    <div>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias3,((stack1 = (depth0 != null ? lookupProperty(depth0,"actions") : depth0)) != null ? lookupProperty(stack1,"items") : stack1),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":43,"column":6},"end":{"line":45,"column":15}}})) != null ? stack1 : "")
    + "    </div>\r\n  </main>\r\n  <footer>\r\n    <!-- Agrega enlaces a redes sociales aquí -->\r\n    <ul>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias3,((stack1 = (depth0 != null ? lookupProperty(depth0,"social") : depth0)) != null ? lookupProperty(stack1,"items") : stack1),{"name":"each","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":51,"column":6},"end":{"line":53,"column":15}}})) != null ? stack1 : "")
    + "    </ul>\r\n  </footer>\r\n  <script src=\"public/js/app.js\"></script>\r\n</body>\r\n</html>\r\n";
},"useData":true});