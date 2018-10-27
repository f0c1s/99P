secondlast :: [a] -> a
secondlast [] = error "Cannot return second last element from empty list"
secondlast [x] = error "Cannot return second last element from single element list"
secondlast [x, y] = x
secondlast (x:xs) = secondlast(xs)
