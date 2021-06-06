(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{417:function(s,t,n){"use strict";n.r(t);var a=n(21),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"原型和原型链"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#原型和原型链"}},[s._v("#")]),s._v(" 原型和原型链")]),s._v(" "),n("p",[s._v("例子")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("Person")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" person "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Person")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nperson"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'a'")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("h2",{attrs:{id:"构造函数和原型的关系"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#构造函数和原型的关系"}},[s._v("#")]),s._v(" 构造函数和原型的关系")]),s._v(" "),n("p",[s._v("首先每一个构造函数都有一个原型对象，也就是 Person -------\x3e Person.prototype，Person通过prototype链接到他的原型，那么原型怎么找到他的构造函数呢？")]),s._v(" "),n("p",[s._v("其实原型对象通过construtor 指向构造函数也就是Person.prototype.construtor-----------\x3e Person")]),s._v(" "),n("h2",{attrs:{id:"实例与原型的关系"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#实例与原型的关系"}},[s._v("#")]),s._v(" 实例与原型的关系")]),s._v(" "),n("p",[s._v("JavaScript中每一个对象除了null之外，都一个__proto__ 指向构造函数的原型对象")]),s._v(" "),n("p",[s._v("也就是说 person."),n("strong",[s._v("proto")]),s._v("（这里是实例化的对象）--------------\x3e Person.prototype")]),s._v(" "),n("p",[s._v("在看一个例子")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("Person")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Person")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("prototype"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'a'")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" person "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Person")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nperson"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'b'")]),s._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'person.name: '")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" person"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("delete")]),s._v(" person"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'person.name: '")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" person"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])]),n("ul",[n("li",[n("p",[s._v("这里俩个console分别输出 b 和 a，原因是在Person.prototype原型对象上我们首先声明了一个name属性，再在实例person对象上声明一个name属性，在第一输入的时候，首先会查找实例对象person上是否存在name属性，如果存在就返回，然后我们删除实例对象上的name属性，这时候我们在此console的时候，1.先查找实例上的属性，发现不存在，2. 再从实例的原型对象上查找。在原型上存在name属性，所有输出了a")])]),s._v(" "),n("li",[n("p",[s._v("所以解释为实例 person."),n("strong",[s._v("proto")]),s._v(" ----------\x3e Person.prototype,这里补充一个方法 Object.getPropotyOf(person) === Person.prototype\nObject.getPropotyOf返回实例的原型对象")])]),s._v(" "),n("li",[n("p",[s._v("那如果原型Person.prototype 不存在name属性还怎么继续查找呢，首先Person.prototype也是一个对象，前边提到JavaScript中除了null之外都存在一个__proto__指针，那Person.prototype."),n("strong",[s._v("proto")]),s._v(" 指向哪里呢")])]),s._v(" "),n("li",[n("p",[s._v("因为Person.prototype是一个实例对象，那就是通过 new Object() 创建的实例，所以就是说 Person.prototype."),n("strong",[s._v("proto")]),s._v(" === Object.prototype,那Object.prototype执行哪里呢，以为Object.prototype已经是最顶层了，所有指向null")])]),s._v(" "),n("li",[n("p",[s._v("实例person中怎么找到自己的构造函数呢，其实person.construtor === Person, 解释其实就是实例person中不存在constrtor属性，其实是通过Person.prototype中的construtor指向了构造函数")])])]),s._v(" "),n("p",[s._v("以上这个链路了解起来也就组成了原型链")])])}),[],!1,null,null,null);t.default=e.exports}}]);