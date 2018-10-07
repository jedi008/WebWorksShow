function bubbleSortAnimate(array){
	UIreadyBubbleSort();
	
	var len = array.length,i,j;
	for(i=len;i--;){
		for(j=0; j<i; j++){
			let Lnumber = array[j];
			let Rnumber = array[j+1];
			
			UIactive(Lnumber, Rnumber);
			
			if(Lnumber > Rnumber){
				
				UIswap(Lnumber, Rnumber);
				
				array[j] = Rnumber;
				array[j+1] = Lnumber;
			}
			
			UIunactive(Lnumber, Rnumber);
		}
	}
	return array;
}

function UIreadyBubbleSort(){
	AllBtnUnabled();
	$("#sortText").html("冒泡排序");
	$("#sortDescribe>p").html("冒泡排序是一种简单的排序算法。它重复地走访过要排序的数列，一次比较两个元素,"+
	"如果它们的顺序错误就把它们交换过来。走访数列的工作是重复地进行直到没有再需要交换，也就是说该数列已经排序完成。"+
	"这个算法的名字由来是因为越小的元素会经由交换慢慢“浮”到数列的顶端。"+

	"<ol>"+
	"<li>比较相邻的元素。如果第一个比第二个大，就交换它们两个；</li>"+
	"<li>对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对，这样在最后的元素应该会是最大的数；</li>"+
	"<li>针对所有的元素重复以上的步骤，除了最后一个；</li>"+
	"<li>重复步骤1~3，直到排序完成。</li></ol>");
}