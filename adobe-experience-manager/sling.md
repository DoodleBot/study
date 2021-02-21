# Sling Notes

## path resolution

When looking up sling:resourceType or sling:resourceSuperType, for instance, it will likely leave off the top level folder. The Sling resource model will first look in the **apps** folder. If it can't be found there it will look in **libs**.
