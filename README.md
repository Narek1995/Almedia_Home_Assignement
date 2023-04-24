## Description
This is a project for Almedia test task. </br>
Main purpose of the project is to design a handler for multiple types of responses. </br>
Solution must validate each offer type from response and parse thous which are valid. </br>
Project is using AJV for Json schema validation and Jest to run tests.</br>
Solution is using factory pattern to handle the response objects.
To define new deserializer we need to specify extend OfferDeserializer and override 3 methods : </br>
1. ``parse(data: any): Offer`` Method which will do mapping between Json object and Offer dto </br>
2. ``generateOfferList(data: any): any[]`` Since we need to bulk parse Offers from given response json, we need to generate Object list from response, this method accepts offer json and by overriding it we can transfer response json into object array, which will be used to iterate through offer objects and parse them </br>
3. ``getSchema(): any`` We need to do schema validation for each object, this method is used to provide AJV schema for each offer type accordingly.</br>

## Installation

```bash
$ yarn install
```


## Test

```bash
# unit tests
$ yarn run test
```