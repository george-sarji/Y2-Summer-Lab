# Write your solution for 1.2 here!

sum = 0
for i in range(100):
    if(i%2==0):
        sum+=i

print(sum)



# Extra
i=1000
while(i>0):
    if(i%6 == 2 and (i*i*i) % 5 ==3):
        print(i)
        break
    i-=1