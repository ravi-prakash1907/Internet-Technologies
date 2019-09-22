## Intro to JavaBeans

**JavaBeans classes in Java encasulate multiple objects into single objects termed as Beans**

> 1.  Must implement Serializable.
  _Serialization:_
  > Serialization is basically persisting.
  > Serialization is a mechanism of converting the state of an object into a byte stream.
  > In this way, we can persist any Java object for future use or recreate it from an existing source.
  > [image](src/serialize-deserialize-java.png)
> 2.  It should have a public no-arg constructor.
> 3.  All properties in java bean must be private with public getters and setter methods.
