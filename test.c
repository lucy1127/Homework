#include <stdio.h>

// alpha = 1, number = 2, space = 3, other = 4;
int getClass(char n){
    if(n >= 'A' && n <= 'Z')
        return 1;
    if(n >= 'a' && n <= 'z')
        return 1;
    if(n >= '0' && n <= '9')
        return 2;
    if(n == ' ')
        return 3;

    return 4;
}

int main(int argc, char const *argv[])
{
    char input[1000], front, now;
    int i;

    printf("Input one string: ");
    
    i = 0;
    while(1){
        scanf("%c", &input[i]);
        
        if(input[i] == '\n')
            break;
        i++;
    }
    input[i] = '\0';


    printf("Initial string: %s\n", input);
    //gets(input);



    printf("The conversion: ");
    if(getClass(input[0]) == 1)
        printf("L");
    if(getClass(input[0]) == 2)
        printf("#");
    if(getClass(input[0]) == 3)
        printf(" ");
    if(getClass(input[0]) == 4)
        printf("?");   


    for(i = 1; input[i] != '\0'; i++){
        front = input[i - 1];
        now = input[i];

        if(getClass(front) != getClass(now)){
            if(getClass(now) == 1)
                printf("L");
            if(getClass(now) == 2)
                printf("#");
            if(getClass(now) == 3)
                printf(" ");
            if(getClass(now) == 4)
                printf("?");   
        }
    }
    printf("\n");

    return 0;
}
