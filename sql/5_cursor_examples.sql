-- Page 1
select *
from large_sample_dataset
order by created_at ASC
limit 1000;

-- Page 2
select *
from large_sample_dataset
where created_at > timestamp '2000-01-01 02:03:00.135' -- Date was retrieved from the result of the page 1 query
order by created_at asc
limit 1000;

-- Page 999
select *
from sample_dataset
where created_at > timestamp '2024-12-22 21:15:22.621' -- No way to get this date
limit 1000;

-- Explain
explain
select *
from sample_dataset
where created_at > timestamp '2024-12-22 21:15:22.621' -- No way to get this date
limit 1000;
