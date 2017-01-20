# Mongoose Models Making MongoDB Mine
An example of how to define mongoose Schemas and Models.
There's a Person Schema and Model, and two Post Shema and model.

The two Post models show two different ways for models and schemas to reference
each other. Documents can either embed documents, or save a reference to another
document.

Embedded documents store information in the stored JSON object. Each post
has an author. With an embedded schema author information will be
duplicated across every post.

Referenced documents won't duplicate information. Referenced documents
are just stored as an id in another document. This saves information
from being saved in many different places, but it requires additional
queries to gather information.

## Licensing
All content is licensed under a CC­BY­NC­SA 4.0 license.
All software code is licensed under GNU GPLv3. For commercial use or alternative licensing, please contact legal@ga.co.

