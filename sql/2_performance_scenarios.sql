-- Page 1
select *
from sample_dataset 
offset 0
limit 1000;

-- Page 2
select *
from sample_dataset 
offset 1000
limit 1000;

-- Page 500
select *
from sample_dataset 
offset 500000
limit 1000;

-- Page 999
select *
from sample_dataset 
offset 999000
limit 1000;

-- Explain
explain
select *
from sample_dataset 
offset 999000
limit 1000;
