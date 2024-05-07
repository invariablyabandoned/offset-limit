-- Page 1
select *
from large_sample_dataset
order by created_at ASC
offset 0
limit 1000;

-- Explain
explain
select *
from large_sample_dataset
order by created_at ASC
offset 0
limit 1000;

-- Page 99999
select *
from large_sample_dataset
order by created_at ASC
offset 99900000
limit 1000;

-- Explain
explain
select *
from large_sample_dataset
order by created_at ASC
offset 99900000
limit 1000;
