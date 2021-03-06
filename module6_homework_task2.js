/*	Савенкова Марина, FR-92
 *	//#2
 *	Написать функцию, которая принимает на входе любое число (но не больше 1 000), 
 *	определяет, является ли оно простым, и выводит простое число или нет. 
 *	Если введено больше 1 000, то выводится сообщение, что данные неверны. 
 *	Обратите внимание на числа 0 и 1.
 *	Здесь вам пригодятся знания из предыдущего модуля — циклы и условные операторы.
 */

 function isPrimeNumber(num) {
 	//проверяем, что это натуральное число меньше тысячи и больше единицы,
 	if (typeof(num) == "number" && !isNaN(num) && Math.ceil(num)==num && (num <= 1000 && num > 1)) {
 		let i = 2;
 		while(i < num) { //находим делители в цикле
 			if (num%i == 0) { //если встретили делитель, выходим
 				break;
 			}
 			i++;
 		}

 		if (i == num) { //если прошли цикл до конца, число простое
 			console.log("Число простое");
 		}
 		else { //иначе составное
 			console.log("Число составное");
 		}
 	}
 	else { //во всех остальных случаях данные не верны
 		console.log("Данные неверны");
 	}
 }



 function task2_Example() {
	console.log("--task2 example--");
	let arrNum = [2, -200, 0, 1, 1001, 1000, 1.5, NaN, true, 54, 9, 3, 6, undefined, "123"];

	for(let i = 0; i < arrNum.length; i++) {
		console.log(`Переданное значение: ${arrNum[i]}:`);
		isPrimeNumber(arrNum[i]);
	}
}

task2_Example();