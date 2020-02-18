import { Component, OnInit } from '@angular/core';
declare var $;
@Component({
  selector: 'app-professional-summary',
  templateUrl: './professional-summary.component.html',
  styleUrls: ['./professional-summary.component.scss']
})
export class ProfessionalSummaryComponent implements OnInit {
  step1: boolean = true;
  step3: boolean = false;
  value1: any = 'invalid';
  value2: any = 'current'
  value3: any = 'completed'
  step2: boolean = false;
  value4: string;


  firstform:boolean=true;
  secondform:boolean=false;
  thirdform:boolean=false;
  constructor() { }

  ngOnInit() {
    function bs_input_file() {
      $(".input-file").before(
        function() {
          if ( ! $(this).prev().hasClass('input-ghost') ) {
            var element = $("<input type='file' class='input-ghost' style='visibility:hidden; height:0'>");
            element.attr("name",$(this).attr("name"));
            element.change(function(){
              element.next(element).find('input').val((element.val()).split('\\').pop());
            });
            $(this).find("button.btn-choose").click(function(){
              element.click();
            });
            // $(this).find("button.btn-reset").click(function(){
            //   element.val(null);
            //   $(this).parents(".input-file").find('input').val('');
            // });
            $(this).find('input').css("cursor","pointer");
            $(this).find('input').mousedown(function() {
              $(this).parents('.input-file').prev().click();
              return false;
            });
            return element;
          }
        }
      );
    }
    $(function() {
      bs_input_file();
    });
  }
  first(){
    this.firstform=false;
    this.secondform=true;
    this.step1 = true;
    this.step2 = true;
    this.value3 = 'current'
    this.value2 = 'completed';
   
  }
  second(){
    this.step3 = true;
    this.value3 = 'completed'
    this.value4 = 'current';
    this.firstform=false;
    this.secondform=false;
    this.thirdform=true;
  }
  back1(){
    this.step2 = false;
    this.step1 = true;
    this.value1 = 'invalid';
    this.value2 = 'current';
    this.firstform=true;
    this.secondform=false;
  }
  third(){
    
    this.value4 = 'completed';
    
  }
  back2(){
    this.step3=false;
    this.value3='current';
    this.thirdform=false;
    this.secondform=true;
  }

}
