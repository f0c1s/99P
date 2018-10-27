lastelement :: [a] -> a
lastelement [] = error "Empty list, cannot find last element."
lastelement [x] = x
lastelement (x:xs) = lastelement xs
