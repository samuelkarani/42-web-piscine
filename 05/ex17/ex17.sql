SELECT COUNT(*) AS 'nb_susc', ROUND(AVG(price)) AS 'av_susc', MOD(SUM(duration_sub), 42) AS 'ft'
FROM subscription;