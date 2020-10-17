#include <stdio.h>

int main(int argc, char const *argv[])
{
    char dictionary_number[13][10] = {
        "Ace","Deuce","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Jack","Queen","King"
    };

    char dictionary_color[4][10] = {
        "Hearts","Diamonds","Clubs","Spades"
    };

    int color[5], number[5];
    int i, j, temp, judge;
    
    for(i = 0; i < 5; i++)
        scanf("%d %d", &color[i], &number[i]);

    for(i = 0; i < 5; i++){
        printf("%s of %s\n", dictionary_number[number[i]], dictionary_color[color[i]]);
    }

    for(i = 0; i < 5; i++){
        for(j = 0; j < 4; j++){
            if(number[j] > number[j + 1]){
                temp = number[j];
                number[j] = number[j + 1];
                number[j + 1] = temp;

                temp = color[j];
                color[j] = color[j + 1];
                color[j + 1] = temp;
            }
        }
    }

    int sum;
    for(i = 0; i < 4; i++){
        sum = 1;
        while(number[i] == number[i + 1]){
            sum++;
            i++;
        }

        if(sum == 2){
            printf("五張牌包含對子 %s\n", dictionary_number[number[i]]);
        }
        else if(sum == 3){
            printf("五張牌包含三條 %s\n", dictionary_number[number[i]]);
        }
        else if(sum == 4){
            printf("五張牌包含四張 %s\n", dictionary_number[number[i]]);
        }
    }

    i = 0;
    judge = 1;

    while(i < 4){
        if(number[i + 1] - number[i] != 1){
            judge = 0;
            break;
        }
        i++;
    }

    if(judge == 1)
        printf("五張牌為 %s 到 %s 的順子\n", dictionary_number[number[0]], dictionary_number[number[4]]);


    judge = 1;
    temp = color[0];
    for(i = 1; i < 5; i++){
        if(color[i] != temp){
            judge = 0;
            break;
        }
    }

    if(judge == 1)
        printf("五張牌為 %s 同花\n", dictionary_color[color[0]]);    

    return 0;
}

// 2 2 2 3 4
//      
