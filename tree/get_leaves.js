/**
 * 递归实现获取树的叶子节点
 * @param {*} 树数据
 */
function get_all_leaf(data) {
  let leaves = []
  function getLeaf (data) {
    data.forEach(item => {
      if(!item.children) {
        leaves.push(item.name)
      } else {
        getLeaf(item.children)
      }
    });
  }
  getLeaf(data)
  return leaves
}

const demoData = [
  {
    name: 'Erling',
    children: [
      {
        name: 'Amanda',
        children: [
          {name: 'Jerry', children: null}
        ]
      },
      {
        name: 'Dennis',
        children: null
      }
    ]
  },
  {
    name: 'Minerva',
    children: [
      { name: 'Kasey', children: null}
    ]
  },
  {
    name: 'Jake',
    children: null
  }
]

console.log(get_all_leaf(demoData))