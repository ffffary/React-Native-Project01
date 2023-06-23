
 // function to get the entered value
  // function goalInputHandler(enteredText) {//get user input输入值处理器，注意传入函数的参数名和初始化时的名字不一样！
  //   setEnteredGoalText(enteredText);
  // }

//点击addGoal按钮时，将用户输入的值传入处理器，最后显示在console里面或者print在网页里
    // allows for keeping the entered goals and appending a new goal:  
//这样是OK的：setCourseGoals([...courseGoals, enteredGoalText]);
//再解释一遍：但是if your new state depends on the previous state, 比较好的方法是
//pass a function to this state-updating function,所以推荐使用arrow function




{/*连接addGoalHandler和GoalInput这两个component*/}



{/* this view is to hold a list of goals ===> 为了使输出的goals能够滑动起来，把view换成ScrollView, 但是会影响到textinput格子的大小，所以在scrollview外层再加一个view, 但是一次性加载所有的items很费时，换成flatlist能提效率，临界点加载新的内容*/}


/* every function receives a single goal, and convert the output goal in text format, also a key element! 
        map方法就是映射map array of data, of strings, or objects into an array of JSX elements, 所以map(里面也是一个匿名函数) 
        *处理安卓和苹果手机打印出来的形状不一样的方法是：在text element的外围wrap一个view即可*/



