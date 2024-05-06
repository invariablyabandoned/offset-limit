-- Create table
create table large_sample_dataset (
  id serial primary key,
  name varchar not null,
  created_at timestamp not null
);

-- Insert 100 million rows
insert into large_sample_dataset (name, created_at)
  select 
    md5(random()::text) as name,
    timestamp '2000-01-01 00:00:00' +
       random() * (timestamp '2025-01-01 00:00:00' -
                   timestamp '2000-01-01 00:00:00') as created_at
  from generate_series(1,100000000) i;

-- Verify
select *
 from large_sample_dataset
 limit 10;
 
select count(*)
from large_sample_dataset;
