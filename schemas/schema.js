// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    {
      title: "Пост",
      name: "post",
      type: "document",
      fields: [
        {
          title: "Постын гарчиг",
          name: "title",
          type: "string",
          description:
            "Блогийн постын үндсэн гарчиг 50 тэмдэгтээс хэтрүүлж болохгүй !!!",
        },
        {
          title: "Дэд гарчиг",
          name: "subtitle",
          type: "string",
          description: "Постын агуулга илэрхийлэх 1 өгүүлбэр",
        },
      ],
    },
  ]),
});
