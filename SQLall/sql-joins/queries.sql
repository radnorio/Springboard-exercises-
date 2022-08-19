
--query one which sets owner id in owners to be equal to vehicles.owner_id
SELECT * FROM owners o 
    FULL OUTER JOIN vehicles v 
        ON o.id=v.owner_id;
--query two which merges the two sets while grouping them by their names
SELECT first_name, last_name, 
    COUNT(owner_id) FROM owners o 
    JOIN vehicles v on o.id=v.owner_id 
    GROUP BY (first_name, last_name) 
ORDER BY first_name;
--query three which finishes the merge by using the group to set each owner id and price into the sets
SELECT 
    first_name, last_name, 
    ROUND(AVG(price)) as average_price, 
    COUNT(owner_id) 
FROM owners o 
JOIN vehicles v on o.id=v.owner_id 
GROUP BY 
    (first_name, last_name) 
HAVING 
    COUNT(owner_id) > 1 AND ROUND(AVG(price)) > 10000 
ORDER BY first_name DESC;