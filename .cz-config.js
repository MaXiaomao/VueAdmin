module.exports = {
	types: [
		{value: "feat", name: "特性: 添加新功能"},
		{value: "fix", name: "修改: 修改代码"},
		{value: "docs", name: "文档: 添加或编辑文档"},
		{value: "style", name: "格式: 代码格式化"},
		{value: "refactor", name: "重构: 代码重构"},
		{value: "perf", name: "性能: 优化性能"},
		{value: "build", name: "构建: 构建流程、外部依赖变更"},
	],
	messages: {
		type: "选择一种你的提交类型:",
		subject: "描述:",
		confirmCommit: "确定提交?"
	},
	allowCustomScopes: true,
	allowBreakingChanges: ["feat", "fix"],
	skipQuestions: ["scope", "body", "footer"],
	subjectLimit: 100
}
