# Upgrade Guide

## v2 > v3
1. Remove **/src/app/shared/app.service.ts**;
Refactor references to point to */node_modules/fire_ng/lib/services/app.service.ts*
2. Remove pipes & directives from project and import from the fire_ng package
3. Call appService.setConfig() in the layout component
4. Change all prefixed blz- components to app-