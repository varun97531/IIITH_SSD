DELIMITER $$
CREATE PROCEDURE `valSum`(
	IN `number1` INT,
	IN `number2` INT,
	OUT `result` INT
)
BEGIN
	Set result = number1 + number2;
END$$
DELIMITER ;

Call `valSum`(2,3,@sayi);
SELECT @sayi;