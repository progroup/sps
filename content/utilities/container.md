# Container

A simple container to center your content horizontally

The .container class can be used in any context, but mostly as a direct child of either:

.navbar
.hero
.section
.footer

The container breakpoints have an offset defined by the $container-offset variable. It has a default value of 60px.

This is how the container will behave:

on $desktop + $container-offset = >= 1068px it will have a maximum width of 960px and will be horizontally centered.
on $widescreen + $container-offset = >= 1260px it will have a maximum width of 1152px.
on $fullhd + $container-offset = >= 1452px it will have a maximum width of 1344px.
The $gap variable has a default value of 24px but can be modified.

The values 960, 1152 and 1344 have been chosen because they are divisible by both 12 and 16.
