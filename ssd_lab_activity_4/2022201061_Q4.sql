DELIMITER $$
CREATE PROCEDURE `proc`()
BEGIN
DECLARE v_name VARCHAR(40);
DECLARE v_grade DECIMAL(10, 0);
DECLARE v_city VARCHAR(35);
DECLARE v_country VARCHAR(20);
DECLARE v_finished integer default 0;
DECLARE c1 cursor for select CUST_NAME , CUST_CITY , CUST_COUNTRY , GRADE FROM customer WHERE AGENT_CODE like 'A00%';
DECLARE continue handler for NOT FOUND set v_finished=1;
open c1;
get_emp: LOOP
fetch c1 into v_name, v_city, v_country, v_grade;
if v_finished=1 then
leave get_emp;
end if;
select v_name, v_city, v_country, v_grade;
END LOOP get_emp;
close c1;
end$$

DELIMITER ;

call `proc`();