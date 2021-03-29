# CREATE DATABASE Test_Base; # 데이터베이스 생성     
SHOW DATABASES; # 데이터베이스 목록 출력 
# USE test_base;  # 데이터베이스 사용  
# DROP DATABASE test_base; # 데이터베이스 삭제   

# 테이블 생성  
CREATE TABLE foodyworm (
	index_Code INT(100),
	nickname VARCHAR(20),
	age INT(5),
	gender VARCHAR(5),
	positions VARCHAR(10));

# 원하는 테이블 삭제  
#DROP TABLE foodyworm;   

# 테이블 목록 확인  
SHOW TABLES;

#테이블 구조 확인 
#EXPLAIN foodyworm;
#DESCRIBE foodyworm;
#SHOW INDEX FROM FoodyWorm;
DESC foodyworm;
DESC tastTable;
# 테이블 데이터 조회(1)  
SELECT * FROM foodyworm;
SELECT * FROM test_table;

# 데이터 입력  
INSERT INTO foodyworm (index_Code, nickname, age, gender, positions) VALUES (2, "김꽃드레", 23, "남자", "사원");

# 데이터 수정 test2test2
#UPDATE foodyworm SET nickname ="김장은" WHERE filed="data";

# 데이터 삭제  
#DELETE FROM foodyworm; #or where filed="data";

# 테이블 데이터 조회(2)
SELECT * FROM foodyworm;