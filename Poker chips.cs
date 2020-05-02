/*
Poker Chips: Luigy works in a Casino and he gives customers poker chips in exchange of money. 
Find the minimum number of chips Luigy can use to match the customer requests. 
He has chips worth 100, 50, 25, 10, 5, 1. For example, for 126 Luigy should give 3 chips (100, 25, 1).
*/

using System;
using System.Collections;

class MainClass { 
  public static void Main (string[] args) {
    Console.WriteLine(MinimumChips(273));
  }

  public static int MinimumChips(int num){

    int[] chips = new int[]{100,50,25,10,5,1};
    int acum=0, index=0, count=0;

    while(acum!=num && num>0){      
      if(acum+chips[index]<=num){
        acum+=chips[index];
        count++;
      }

      if(acum+chips[index]>num){
          index++;
      }
    }

    return count;
  }
}