SELECT W.Essn,COUNT(*) FROM WORKS_ON W WHERE W.Essn=(SELECT D.MGR_ssn FROM DEPARTMENT D, WORKS_ON W WHERE D.Mgr_ssn=W.Essn AND W.Pno=3) GROUP BY W.Essn;

