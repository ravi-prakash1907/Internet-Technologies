## Intro to JavaBeans

**JavaBeans classes in Java encasulate multiple objects into single objects termed as Beans**

> 1.  Must implement Serializable.
  _Serialization:_
  > Serialization is basically persisting.
  > Serialization is a mechanism of converting the state of an object into a byte stream.
  > In this way, we can persist any Java object for future use or recreate it from an existing source.<br />
  [Also, check this image i.e. taken from Geeks for Geeks](src/serialize-deserialize-java.png)
> 2.  It can only have a public and non parametarized constructor.
> 3.  All properties in java bean must be private with public getters and setter methods.

**A JavaBeans class must contain it's Getter and Setter methods**

####Getters:

> Public
> Return-type must not be void
> getXYZ()

####Setters:

> Public
> Return-type is void
> setXYZ(<param>)

eg.:
```
public class aBean {
  private int data;

  // Getter method for 'data'
  public void setData(int val) {
    this.data = val;
  }

  // Setter method for 'data'
  public int getData() {
    return this.data;
  }
}
```
