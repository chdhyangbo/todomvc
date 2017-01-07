(function (angular) {
	'use strict';
	// 1.创建一个模块,用来管理界面的结构
	// 2.注册一个主要的控制器(属于摸个模块),用于往视图中博爱路数据
	angular.module('todoApp',[])
	.controller('todocontroller',['$scope','$location',function($scope,$location){
		//文字模型
		$scope.text = '';
		//列表模型
		$scope.todolist = [
		{id:1,text:"学习",completed:false},
		{id:2,text:"吃饭",completed:false},
		{id:3,text:"打豆豆",completed:true},
		];
		//数据控制
		//添加任务
		$scope.add = function(){
			//如果传入的为空,则不进行操作
			if(!$scope.text){
				return ;
			}
			//添加一个数据添加到数据中
			$scope.todolist.push({
					id: getId(),
					text:$scope.text,
					completed:false
				});
			$scope.text='';
		};
		//得到不重复的id值
		function getId(){
			var id = Math.random();
			for (var i = 0; i < $scope.todolist.length; i++) {
				if (id == $scope.todolist[i]) {
					id = getId();
					break;
				}	
			}
			return id;
		}
		//删除任务
		$scope.delect = function(id){
			for (var i = 0; i < $scope.todolist.length; i++) {
				if ($scope.todolist[i].id === id) {
					//删除当前的数组
					$scope.todolist.splice(i, 1);
					break;
				}			
			}
		}
		//删除所有已经选择的项
		$scope.clear = function(){
			var todos = [];
			for (var i = 0; i < $scope.todolist.length; i++) {
				if ($scope.todolist[i].completed == false) {
					todos.push($scope.todolist[i]);
				}
			}
			$scope.todolist = todos;
		}
		//查看是否有已经完成的项
		$scope.exitcompleted = function(){
			for (var i = 0; i < $scope.todolist.length; i++) {
				if ($scope.todolist[i].completed) {
					return true;
				}
			}
			return false;
		}
		//编辑未完成项
		$scope.currentextId = -1;
		$scope.currenttext = function(id){
				for (var i = 0; i < $scope.todolist.length; i++) {
					//判断是谁的id
					if ($scope.todolist[i].id == id) {
						var is = $scope.todolist[i].completed;
					}
				}
				//如果任务已经完成,则不可以编辑
				if (!is) {
					$scope.currenttextId = id;
				}					
		};
		// 修改列表后取消editing状态
		$scope.save = function(){
			$scope.currenttextId = -1;
		};
		//采用事件进行全选
		var now = true;
		$scope.toggleall = function(){
			
			for (var i = 0; i < $scope.todolist.length; i++) {
				$scope.todolist[i].completed = now;
			}
			now = !now;
		};
		//采用$watch()会十分耗时
		//在chekedallbox 里面绑定checkall 的数据模型
		// $scope.$watch('checkall',function(now,old){
		// 	for (var i = 0; i < $scope.todolist.length; i++) {
		// 		$scope.todolist[i].completed = now;
		// 	}
		// });
		
		// 显示全部,已完成,未完成的功能
		$scope.sh = '';
		$scope.getshowho = function(completed){	
			$scope.sh = completed;
		}
		$scope.setshowho =function(){
			return {completed:$scope.sh};
		}
		//通过得到标志名来修改样式
		$scope.select = function(){
			//通过path 得到锚点值
			//和需要响应的字符串对比
			var path = $location.path();
			return path;
		}
		$scope.select();
	}]);




})(angular);
