
Tower.View.cache = {
  'welcome': Ember.Handlebars.compile('<h1>Welcome to Tower.js</h1>\
'),
  'messages/show': Ember.Handlebars.compile('{{#if getFlash.error}}<div class="alert alert-error">\
  <a class="close" data-dismiss="alert" href="#">\
    x\
  </a>\
  <h1>Error!</h1>\
  <h4>{{getFlash.error}}</h4>\
</div>\
{{/if}}{{#if getFlash.success}}<div class="alert alert-success">\
  <a class="close" data-dismiss="alert" href="#">\
    x\
  </a>\
  <h1>Success!</h1>\
  <h4>{{getFlash.success}}</h4>\
</div>\
{{/if}}{{#if getFlash.info}}<div class="alert alert-info">\
  <a class="close" data-dismiss="alert" href="#">\
    x\
  </a>\
  <h1>Important!</h1>\
  <h4>{{getFlash.info}}</h4>\
</div>\
{{/if}}{{#with resource}}<dl class="content">\
  <dt>User:</dt>\
  <dd>{{user}}</dd>\
  <dt>Body:</dt>\
  <dd>{{body}}</dd>\
</dl>\
{{/with}}'),
  'messages/new': Ember.Handlebars.compile('{{#if getFlash.error}}<div class="alert alert-error">\
  <a class="close" data-dismiss="alert" href="#">\
    x\
  </a>\
  <h1>Error!</h1>\
  <h4>{{getFlash.error}}</h4>\
</div>\
{{/if}}{{#if getFlash.success}}<div class="alert alert-success">\
  <a class="close" data-dismiss="alert" href="#">\
    x\
  </a>\
  <h1>Success!</h1>\
  <h4>{{getFlash.success}}</h4>\
</div>\
{{/if}}{{#if getFlash.info}}<div class="alert alert-info">\
  <a class="close" data-dismiss="alert" href="#">\
    x\
  </a>\
  <h1>Important!</h1>\
  <h4>{{getFlash.info}}</h4>\
</div>\
{{/if}}{{#with resource}}<form>\
  <fieldset>\
    <ul class="fields">\
      <li class="control-group">\
        <div class="controls">\
          <label>User:</label>\
{{view Ember.TextField valueBinding="user"}}{{#with errors}}          <span class="help-inline error">{{user}}</span>\
{{/with}}        </div>\
      </li>\
      <li class="control-group">\
        <div class="controls">\
          <label>Body:</label>\
{{view Ember.TextField valueBinding="body"}}{{#with errors}}          <span class="help-inline error">{{body}}</span>\
{{/with}}        </div>\
      </li>\
      <li>\
        <a {{action submit target="resource"}}>Submit</a>\
      </li>\
    </ul>\
  </fieldset>\
</form>\
{{/with}}'),
  'messages/index': Ember.Handlebars.compile('{{#if getFlash.error}}<div class="alert alert-error">\
  <a class="close" data-dismiss="alert" href="#">\
    x\
  </a>\
  <h1>Error!</h1>\
  <h4>{{getFlash.error}}</h4>\
</div>\
{{/if}}{{#if getFlash.success}}<div class="alert alert-success">\
  <a class="close" data-dismiss="alert" href="#">\
    x\
  </a>\
  <h1>Success!</h1>\
  <h4>{{getFlash.success}}</h4>\
</div>\
{{/if}}{{#if getFlash.info}}<div class="alert alert-info">\
  <a class="close" data-dismiss="alert" href="#">\
    x\
  </a>\
  <h1>Important!</h1>\
  <h4>{{getFlash.info}}</h4>\
</div>\
{{/if}}<table summary="Table for Messages" role="grid" class="table">\
  <thead>\
    <tr scope="row">\
      <th abbr="user" role="columnheader" scope="col" class="sortable asc" aria-sort="asc" aria-selected="aria-selected">\
        <a href="?sort=+">\
          <span>User</span>\
        </a>\
      </th>\
      <th abbr="body" role="columnheader" scope="col" class="sortable asc" aria-sort="asc" aria-selected="aria-selected">\
        <a href="?sort=+">\
          <span>Body</span>\
        </a>\
      </th>\
    </tr>\
  </thead>\
  <tbody>\
{{#each message in App.messagesController.all}}    <tr class="message" scope="row" role="row">\
      <td role="gridcell">{{message.user}}</td>\
      <td role="gridcell">{{message.body}}</td>\
      <td role="gridcell">\
        <a {{action showMessage message href=true}}>Show</a>\
        <span>|</span>\
        <a {{action editMessage message href=true}}>Edit</a>\
        <span>|</span>\
        <a {{action destroyMessage message}}>Destroy</a>\
      </td>\
    </tr>\
{{/each}}  </tbody>\
  <tfoot>\
    <tr scope="row">\
      <td colspan="5" role="gridcell">\
        <a {{action newMessage message href=true}}>New Message</a>\
      </td>\
    </tr>\
  </tfoot>\
</table>\
'),
  'messages/edit': Ember.Handlebars.compile('{{#if getFlash.error}}<div class="alert alert-error">\
  <a class="close" data-dismiss="alert" href="#">\
    x\
  </a>\
  <h1>Error!</h1>\
  <h4>{{getFlash.error}}</h4>\
</div>\
{{/if}}{{#if getFlash.success}}<div class="alert alert-success">\
  <a class="close" data-dismiss="alert" href="#">\
    x\
  </a>\
  <h1>Success!</h1>\
  <h4>{{getFlash.success}}</h4>\
</div>\
{{/if}}{{#if getFlash.info}}<div class="alert alert-info">\
  <a class="close" data-dismiss="alert" href="#">\
    x\
  </a>\
  <h1>Important!</h1>\
  <h4>{{getFlash.info}}</h4>\
</div>\
{{/if}}{{#with resource}}<form>\
  <fieldset>\
    <ul class="fields">\
      <li class="control-group">\
        <div class="controls">\
          <label>User:</label>\
{{view Ember.TextField valueBinding="user"}}{{#with errors}}          <span class="help-inline error">{{user}}</span>\
{{/with}}        </div>\
      </li>\
      <li class="control-group">\
        <div class="controls">\
          <label>Body:</label>\
{{view Ember.TextField valueBinding="body"}}{{#with errors}}          <span class="help-inline error">{{body}}</span>\
{{/with}}        </div>\
      </li>\
      <li>\
        <a {{action submit target="resource"}}>Submit</a>\
      </li>\
    </ul>\
  </fieldset>\
</form>\
{{/with}}'),
  'gists/show': Ember.Handlebars.compile('{{#if getFlash.error}}<div class="alert alert-error">\
  <a class="close" data-dismiss="alert" href="#">\
    x\
  </a>\
  <h1>Error!</h1>\
  <h4>{{getFlash.error}}</h4>\
</div>\
{{/if}}{{#if getFlash.success}}<div class="alert alert-success">\
  <a class="close" data-dismiss="alert" href="#">\
    x\
  </a>\
  <h1>Success!</h1>\
  <h4>{{getFlash.success}}</h4>\
</div>\
{{/if}}{{#if getFlash.info}}<div class="alert alert-info">\
  <a class="close" data-dismiss="alert" href="#">\
    x\
  </a>\
  <h1>Important!</h1>\
  <h4>{{getFlash.info}}</h4>\
</div>\
{{/if}}{{#with resource}}<dl class="content">\
  <dt>Text:</dt>\
  <dd>{{text}}</dd>\
  <dt>Git hub url:</dt>\
  <dd>{{gitHubUrl}}</dd>\
</dl>\
{{/with}}'),
  'gists/new': Ember.Handlebars.compile('{{#if getFlash.error}}<div class="alert alert-error">\
  <a class="close" data-dismiss="alert" href="#">\
    x\
  </a>\
  <h1>Error!</h1>\
  <h4>{{getFlash.error}}</h4>\
</div>\
{{/if}}{{#if getFlash.success}}<div class="alert alert-success">\
  <a class="close" data-dismiss="alert" href="#">\
    x\
  </a>\
  <h1>Success!</h1>\
  <h4>{{getFlash.success}}</h4>\
</div>\
{{/if}}{{#if getFlash.info}}<div class="alert alert-info">\
  <a class="close" data-dismiss="alert" href="#">\
    x\
  </a>\
  <h1>Important!</h1>\
  <h4>{{getFlash.info}}</h4>\
</div>\
{{/if}}{{#with resource}}<form>\
  <fieldset>\
    <ul class="fields">\
      <li class="control-group">\
        <div class="controls">\
          <label>Text:</label>\
{{view Ember.TextField valueBinding="text"}}{{#with errors}}          <span class="help-inline error">{{text}}</span>\
{{/with}}        </div>\
      </li>\
      <li class="control-group">\
        <div class="controls">\
          <label>Git hub url:</label>\
{{view Ember.TextField valueBinding="gitHubUrl"}}{{#with errors}}          <span class="help-inline error">{{gitHubUrl}}</span>\
{{/with}}        </div>\
      </li>\
      <li>\
        <a {{action submit target="resource"}}>Submit</a>\
      </li>\
    </ul>\
  </fieldset>\
</form>\
{{/with}}'),
  'gists/index': Ember.Handlebars.compile('{{#if getFlash.error}}<div class="alert alert-error">\
  <a class="close" data-dismiss="alert" href="#">\
    x\
  </a>\
  <h1>Error!</h1>\
  <h4>{{getFlash.error}}</h4>\
</div>\
{{/if}}{{#if getFlash.success}}<div class="alert alert-success">\
  <a class="close" data-dismiss="alert" href="#">\
    x\
  </a>\
  <h1>Success!</h1>\
  <h4>{{getFlash.success}}</h4>\
</div>\
{{/if}}{{#if getFlash.info}}<div class="alert alert-info">\
  <a class="close" data-dismiss="alert" href="#">\
    x\
  </a>\
  <h1>Important!</h1>\
  <h4>{{getFlash.info}}</h4>\
</div>\
{{/if}}<table summary="Table for Gists" role="grid" class="table">\
  <thead>\
    <tr scope="row">\
      <th abbr="text" role="columnheader" scope="col" class="sortable asc" aria-sort="asc" aria-selected="aria-selected">\
        <a href="?sort=+">\
          <span>Text</span>\
        </a>\
      </th>\
      <th abbr="gitHubUrl" role="columnheader" scope="col" class="sortable asc" aria-sort="asc" aria-selected="aria-selected">\
        <a href="?sort=+">\
          <span>GitHubUrl</span>\
        </a>\
      </th>\
    </tr>\
  </thead>\
  <tbody>\
{{#each gist in App.gistsController.all}}    <tr class="gist" scope="row" role="row">\
      <td role="gridcell">{{gist.text}}</td>\
      <td role="gridcell">{{gist.gitHubUrl}}</td>\
      <td role="gridcell">\
        <a {{action showGist gist href=true}}>Show</a>\
        <span>|</span>\
        <a {{action editGist gist href=true}}>Edit</a>\
        <span>|</span>\
        <a {{action destroyGist gist}}>Destroy</a>\
      </td>\
    </tr>\
{{/each}}  </tbody>\
  <tfoot>\
    <tr scope="row">\
      <td colspan="5" role="gridcell">\
        <a {{action newGist gist href=true}}>New Gist</a>\
      </td>\
    </tr>\
  </tfoot>\
</table>\
'),
  'gists/edit': Ember.Handlebars.compile('{{#if getFlash.error}}<div class="alert alert-error">\
  <a class="close" data-dismiss="alert" href="#">\
    x\
  </a>\
  <h1>Error!</h1>\
  <h4>{{getFlash.error}}</h4>\
</div>\
{{/if}}{{#if getFlash.success}}<div class="alert alert-success">\
  <a class="close" data-dismiss="alert" href="#">\
    x\
  </a>\
  <h1>Success!</h1>\
  <h4>{{getFlash.success}}</h4>\
</div>\
{{/if}}{{#if getFlash.info}}<div class="alert alert-info">\
  <a class="close" data-dismiss="alert" href="#">\
    x\
  </a>\
  <h1>Important!</h1>\
  <h4>{{getFlash.info}}</h4>\
</div>\
{{/if}}{{#with resource}}<form>\
  <fieldset>\
    <ul class="fields">\
      <li class="control-group">\
        <div class="controls">\
          <label>Text:</label>\
{{view Ember.TextField valueBinding="text"}}{{#with errors}}          <span class="help-inline error">{{text}}</span>\
{{/with}}        </div>\
      </li>\
      <li class="control-group">\
        <div class="controls">\
          <label>Git hub url:</label>\
{{view Ember.TextField valueBinding="gitHubUrl"}}{{#with errors}}          <span class="help-inline error">{{gitHubUrl}}</span>\
{{/with}}        </div>\
      </li>\
      <li>\
        <a {{action submit target="resource"}}>Submit</a>\
      </li>\
    </ul>\
  </fieldset>\
</form>\
{{/with}}')
};

_.extend(Ember.TEMPLATES, Tower.View.cache);
