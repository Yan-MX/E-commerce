## Mockup data source

The mockup data used in this project is downloaded from https://data.world/data-hut/product-data-from-adidas.

## Conversion

The downloaded csv file is converted to json using https://www.convertcsv.com/csv-to-json.htm

The top 100 items in the result json file are used in this project.

## Folder structure

This is special restriction added by developers of create-react-app. It is implemented in ModuleScopePlugin to ensure files reside in src/. That plugin ensures that relative imports from app's source directory don't reach outside of it.

You can disable this feature but only after eject operation of create-react-app project.
