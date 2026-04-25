import React, { useState, useEffect, useLayoutEffect } from "react";
import { View, Text, Button } from "react-native";

function Child({ value, updateParent }) {
  console.log("Child Render", value);

  useLayoutEffect(() => {
    console.log("Child LayoutEffect", value);
  }, [value]);

  useEffect(() => {
    console.log("Child Effect", value);

    Promise.resolve().then(() => {
      console.log("Child Microtask", value);
    });

    setTimeout(() => {
      console.log("Child Timeout", value);
    }, 0);

    return () => {
      console.log("Child Cleanup", value);
    };
  }, [value]);

  return (
    <View>
      <Text>Child: {value}</Text>
      <Button title="Update Parent" onPress={updateParent} />
    </View>
  );
}

export default function Parent() {
  const [count, setCount] = useState(0);

  console.log("Parent Render", count);

  useLayoutEffect(() => {
    console.log("Parent LayoutEffect", count);
  }, [count]);

  useEffect(() => {
    console.log("Parent Effect", count);

    Promise.resolve().then(() => {
      console.log("Parent Microtask", count);
    });

    setTimeout(() => {
      console.log("Parent Timeout", count);
    }, 0);
  }, [count]);

  const updateParent = () => {
    console.log("Button Click");

    setCount(c => c + 1);

    Promise.resolve().then(() => {
      setCount(c => c + 1);
      console.log("Microtask Update");
    });

    setTimeout(() => {
      setCount(c => c + 1);
      console.log("Timeout Update");
    }, 0);
  };

  return (
    <View>
      <Text>Parent: {count}</Text>
      <Child value={count} updateParent={updateParent} />
    </View>
  );
}

/*

Parent Render 0

Child Render 0

Child LayoutEffect 0

Parent LayoutEffect 0

Child Effect 0

Parent Effect 0

Child Microtask 0

Parent Microtask 0

Child Timeout 0

Parent Timeout 0

Button Click

Parent Render 1

Child Render 1

Child LayoutEffect 1

Parent LayoutEffect 1

Child Cleanup 0

Child Effect 1

Parent Effect 1

Microtask Update

Child Microtask 1

Parent Microtask 1

Parent Render 2

Child Render 2

Child LayoutEffect 2

Parent LayoutEffect 2

Child Cleanup 1

Child Effect 2

Parent Effect 2

Child Microtask 2

Parent Microtask 2

Timeout Update

Child Timeout 1

Parent Timeout 1

Child Timeout 2

Parent Timeout 2

Parent Render 3

Child Render 3

Child LayoutEffect 3

Parent LayoutEffect 3

Child Cleanup 2

Child Effect 3

Parent Effect 3

Child Microtask 3

Parent Microtask 3

Child Timeout 3

Parent Timeout 3
*/
