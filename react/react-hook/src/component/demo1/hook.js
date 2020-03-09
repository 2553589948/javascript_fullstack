import React, { useState } from 'react';
// useState就是其中一个hook
   function Example() {
     const [count, setCount] = useState(0);
 
     return (
       <div>
         <p>You clicked {count} times</p>
         <button onClick={() => setCount(count + 1)}>
         Click me
        </button>
      </div>
    );
  }

export default Example

// hooks本质上就是一类特殊的函数 目的就是不要写class(需要注意this作用域问题) 不能出现在条件判断语句中