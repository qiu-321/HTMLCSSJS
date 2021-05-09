// take in three cards and determine if it is a set or not
// check of they have the ame attribute */
function checkSameAttribute(attr1,attr2,attr3){
	if (attr1 == attr2 && attr2 == attr3){
		return true;
	}
	return false;
}
// check if they have a different attribute
function checkDiffAttribute(attr1,attr2,attr3){
	if (attr1 != attr2 && attr2 != attr3 && attr3 != attr1){
		return true;
	}
	return false;
}
// create method for checking set

function isSet(card1, card2, card3){
	if ((checkSameAttribute(card1.color,card2.color,card3.color) || checkDiffAttribute(card1.color,card2.color,card3.color)) &&
		(checkSameAttribute(card1.shading,card2.shading,card3.shading) || checkDiffAttribute(card1.shading,card2.shading,card3.shading)) &&
		(checkSameAttribute(card1.number,card2.number,card3.number) || checkDiffAttribute(card1.number,card2.number,card3.number)) &&
		(checkSameAttribute(card1.shape,card2.shape,card3.shape) || checkDiffAttribute(card1.shape,card2.shape,card3.shape))) {
		return true;
	}
	return false;
}