
  function selectValueCh(info,named){

    document.getElementById('facilitiesState').value = info;
    document.getElementById('facilitiesModel').value = named;
    
    var AdId = document.getElementById('dethAdFormBox');
    var ReId = document.getElementById('dethReFormBox');
    ReId.remove();
    var addDiv = document.createElement('div');
    addDiv.id = 'dethReFormBox';
    if(info== '태양광 패널'){
      addDiv.innerHTML =
      "<div class='row mb-3'>"+
      "<label class='col-md-3 col-form-label'>정격출력(Wp)</label>"+
      "<div class='col-md-4'><input type='text' class='form-control'></div>"+
      "<label class='col-md-1 col-form-label'><p class='p-text-center'>~</p></label>"+
      "<div class='col-md-4'><input type='text' class='form-control'></div>"+
      "</div>"+
      "<div class='row mb-3'>"+
      "<label class='col-md-3 col-form-label'>정격출력(%)</label>"+
      "<div class='col-md-4'><input type='text' class='form-control'></div>"+
      "<label class='col-md-1 col-form-label'><p class='p-text-center'>~</p></label>"+
      "<div class='col-md-4'><input type='text' class='form-control'></div>"+
      "</div>"+
      "<div class='row mb-3'>"+
      "<label class='col-md-3 col-form-label'>입력허용(V))</label>"+
      "<div class='col-md-4'><input type='text' class='form-control'></div>"+
      "<label class='col-md-1 col-form-label'><p class='p-text-center'>~</p></label>"+
      "<div class='col-md-4'><input type='text' class='form-control'></div>"+
      "</div>"+
      "<div class='row mb-3'>"+
      "<label class='col-md-3 col-form-label'>입력허용A(A)</label>"+
      "<div class='col-md-4'><input type='text' class='form-control'></div>"+
      "<label class='col-md-1 col-form-label'><p class='p-text-center'>~</p></label>"+
      "<div class='col-md-4'><input type='text' class='form-control'></div>"+
      "</div>"+
      "<div class='row mb-3'>"+
      "<label class='col-md-3 col-form-label'>동작온도(℃)</label>"+
      "<div class='col-md-4'><input type='text' class='form-control'></div>"+
      "<label class='col-md-1 col-form-label'><p class='p-text-center'>~</p></label>"+
      "<div class='col-md-4'><input type='text' class='form-control'></div>"+
      "</div>"+
      "<div class='row mb-3'>"+
      "<label class='col-md-3 col-form-label'>동작습도(%)</label>"+
      "<div class='col-md-4'><input type='text' class='form-control'></div>"+
      "<label class='col-md-1 col-form-label'><p class='p-text-center'>~</p></label>"+
      "<div class='col-md-4'><input type='text' class='form-control'></div>"+
      "</div>"+
      "<div class='row mb-3'>"+
      "<label class='col-md-3 col-form-label'>동작풍설하중(Pa)</label>"+
      "<div class='col-md-4'><input type='text' class='form-control'></div>"+
      "<label class='col-md-1 col-form-label'><p class='p-text-center'>~</p></label>"+
      "<div class='col-md-4'><input type='text' class='form-control'></div>"+
      "</div>"+
      "<div class='row mb-3'>"+
      "<label class='col-md-3 col-form-label'>온도계수</label>"+
      "<div class='col-md-4'><input type='text' class='form-control'></div>"+
      "</div>"+
      "<div class='row mb-3'>"+
      "<label class='col-md-3 col-form-label'>치수(mm)</label>"+
      "<div class='col-md-2'><input type='text' class='form-control'></div>"+
      "<label class='col-md-1 col-form-label'><p class='p-text-center'>*</p></label>"+
      "<div class='col-md-2'><input type='text' class='form-control'></div>"+
      "<label class='col-md-1 col-form-label'><p class='p-text-center'>*</p></label>"+
      "<div class='col-md-2'><input type='text' class='form-control'></div>"+
      "</div>"+
      "<div class='row mb-3'>"+
      "<label class='col-md-3 col-form-label'>무게(Kg)</label>"+
      "<div class='col-md-4'><input type='text' class='form-control'></div>"+
      "</div>"+
      "<div class='row mb-3'>"+
      "<label class='col-md-3 col-form-label'>제품보증기간(개월)</label>"+
      "<div class='col-md-4'><input type='text' class='form-control'></div>"+
      "</div>"+
      "<div class='row mb-3'>"+
      "<label class='col-md-3 col-form-label'>성능보증기간(개월)</label>"+
      "<div class='col-md-4'><input type='text' class='form-control'></div>"+
      "<div class='col-md-4'><input type='text' class='form-control'></div>"+
      "<label class='col-md-1 col-form-label'><p class='p-text-left'>%</p></label>"+
      "</div>"+
      "<div class='row mb-3'>"+
      "<label for='inputEmail3' class='col-md-3 col-form-label'>참고 사항</label>"+
      "<div class='col-md-9'>"+
      "<textarea class='form-control' id='floatingTextarea' style='height: 100px;'></textarea>"+
      "</div>"+
      "</div>"+
      "<div class='row mb-3'>"+
      "<label for='inputEmail3' class='col-md-3 col-form-label'>제품사진</label>"+
      "<div class='col-md-6'>"+
      "<img src='./mk/img/i-ims.png' class='img-fluid rounded-start'>"+
      "</div>"+
      "<div class='col-md-3'><button type='button' class='btn btn-seacch'>사진추가</button></div>"+
      "</div>";
    }else if(info== '인버터'){
      addDiv.innerHTML =
      "<div class='row mb-3'>"+
      "<label class='col-md-3 col-form-label'>최대입력전압(V)</label>"+
      "<div class='col-md-3'><input type='text' class='form-control'></div>"+
      "<label class='col-md-3 col-form-label'>최대입력전류(A)</label>"+
      "<div class='col-md-3'><input type='text' class='form-control'></div>"+
      "</div>"+
      "<div class='row mb-3'>"+
      "<label class='col-md-3 col-form-label'>최대입력전력(W)</label>"+
      "<div class='col-md-3'><input type='text' class='form-control'></div>"+
      "<label class='col-md-3 col-form-label'>최대단락전류(A)</label>"+
      "<div class='col-md-3'><input type='text' class='form-control'></div>"+
      "</div>"+
      "<div class='row mb-3'>"+
      "<label class='col-md-3 col-form-label'>기동전압(V)</label>"+
      "<div class='col-md-3'><input type='text' class='form-control'></div>"+
      "<label class='col-md-3 col-form-label'>정격입력전압(V)</label>"+
      "<div class='col-md-3'><input type='text' class='form-control'></div>"+
      "</div>"+
      "<div class='row mb-3'>"+   
      "<label class='col-md-3 col-form-label'>정격출력전력(W)</label>"+
      "<div class='col-md-3'><input type='text' class='form-control'></div>"+
      "<label class='col-md-3 col-form-label'>정격출력전압(V)</label>"+
      "<div class='col-md-3'><input type='text' class='form-control'></div>"+
      "</div>"+
      "<div class='row mb-3'>"+
      "<label class='col-md-3 col-form-label'>정격출력주파수(Hz)</label>"+
      "<div class='col-md-3'><input type='text' class='form-control'></div>"+
      "<label class='col-md-3 col-form-label'>MPPT 제어기 수</label>"+
      "<div class='col-md-3'><input type='text' class='form-control'></div>"+
      "</div>"+   
      "<div class='row mb-3'>"+
      "<label class='col-md-3 col-form-label'>MPPT 당 스트링 수</label>"+
      "<div class='col-md-3'><input type='text' class='form-control'></div>"+
      "<label class='col-md-3 col-form-label'>최대출력전력(W)</label>"+
      "<div class='col-md-3'><input type='text' class='form-control'></div>"+
      "</div>"+
      "<div class='row mb-3'>"+
      "<label class='col-md-3 col-form-label'>최대출력전류(A)</label>"+
      "<div class='col-md-3'><input type='text' class='form-control'></div>"+
      "<label class='col-md-3 col-form-label'><P style='font-size: 14px;'>최대출력피상전력(W)</P></label>"+
      "<div class='col-md-3'><input type='text' class='form-control'></div>"+ 
      "</div>"+
      "<div class='row mb-3'>"+
      "<label class='col-md-3 col-form-label'>최대효율(%)</label>"+
      "<div class='col-md-3'><input type='text' class='form-control'></div>"+
      "<label class='col-md-3 col-form-label'>유로효율(%)</label>"+
      "<div class='col-md-3'><input type='text' class='form-control'></div>"+
      "</div>"+  
      "<div class='row mb-3'>"+ 
      "<label class='col-md-3 col-form-label'>동작온도(℃)</label>"+
      "<div class='col-md-3'><input type='text' class='form-control'></div>"+
      "<label class='col-md-3 col-form-label'><p class='p-text-center'>~</p></label>"+
      "<div class='col-md-3'><input type='text' class='form-control'></div>"+
      "</div>"+
      "<div class='row mb-3'>"+
      "<label class='col-md-3 col-form-label'>상대습도(%)</label>"+  
      "<div class='col-md-3'><input type='text' class='form-control'></div>"+
      "<label class='col-md-3 col-form-label'><p class='p-text-center'>~</p></label>"+
      "<div class='col-md-3'><input type='text' class='form-control'></div>"+
      "</div>"+
      "<div class='row mb-3'>"+
      "<label class='col-md-3 col-form-label'>치수(mm)</label>"+
      "<div class='col-md-2'><input type='text' class='form-control'></div>"+  
      "<label class='col-md-1 col-form-label'><p class='p-text-center'>*</p></label>"+
      "<div class='col-md-2'><input type='text' class='form-control'></div>"+
      "<label class='col-md-1 col-form-label'><p class='p-text-center'>*</p></label>"+
      "<div class='col-md-2'><input type='text' class='form-control'></div>"+
      "</div>"+
      "<div class='row mb-3'>"+
      "<label class='col-md-3 col-form-label'>무게(Kg)</label>"+    
      "<div class='col-md-4'><input type='text' class='form-control'></div>"+
      "</div>"+  
      "<div class='row mb-3'>"+
      "<label class='col-md-3 col-form-label'>IP 등급</label>"+
      "<div class='col-md-3'><input type='text' class='form-control'></div>"+
      "<label class='col-md-2 col-form-label'>변압 방식</label>"+
      "<div class='col-md-3'><input type='text' class='form-control'></div>"+
      "</div>"+
      "<div class='row mb-3'>"+        
      "<label class='col-md-3 col-form-label'>제품보증기간(개월)</label>"+
      "<div class='col-md-4'><input type='text' class='form-control'></div>"+  
      "</div>"+
      "<div class='row mb-3'>"+
      "<label class='col-md-3 col-form-label'>성능보증기간(개월)</label>"+
      "<div class='col-md-4'><input type='text' class='form-control'></div>"+
      "<div class='col-md-4'><input type='text' class='form-control'></div>"+
      "<label class='col-md-1 col-form-label'><p class='p-text-left'>%</p></label>"+
      "</div>"+          
      "<div class='row mb-3'>"+
      "<label for='inputEmail3' class='col-md-3 col-form-label'>참고 사항</label>"+  
      "<div class='col-md-9'><textarea class='form-control' id='floatingTextarea' style='height: 100px;'></textarea></div>"+
      "</div>"+
      "<div class='row mb-3'>"+
      "<label for='inputEmail3' class='col-md-3 col-form-label'>제품사진</label>"+
      "<div class='col-md-6'><img src='./mk/img/i-ims.png' class='img-fluid rounded-start'></div>"+
      "<div class='col-md-3'><button type='button' class='btn btn-seacch'>사진추가</button></div>"+
      "</div>"; 
    }else if(info== '전력 계량기'){
      addDiv.innerHTML =
      "<div class='row mb-3'>"+
      "<label class='col-md-3 col-form-label'>TYPE</label>"+
      "<div class='col-md-3'><input type='text' class='form-control'></div>"+
      "<label class='col-md-3 col-form-label'>상/선식</label>"+
      "<div class='col-md-3'><input type='text' class='form-control'></div>"+
      "</div>"+
      "<div class='row mb-3'>"+
      "<label class='col-md-3 col-form-label'>정격전압(V)</label>"+
      "<div class='col-md-3'><input type='text' class='form-control'></div>"+
      "<label class='col-md-3 col-form-label'>정격전류(A)</label>"+
      "<div class='col-md-3'><input type='text' class='form-control'></div>"+
      "</div>"+
      "<div class='row mb-3'>"+
      "<label class='col-md-3 col-form-label'>정격주파수(Hz)</label>"+
      "<div class='col-md-3'><input type='text' class='form-control'></div>"+
      "</div>"+
      "<div class='row mb-3'>"+
      "<label class='col-md-3 col-form-label'>정밀도(Class)</label>"+
      "<div class='col-md-3'><input type='text' class='form-control'></div>"+
      "<label class='col-md-3 col-form-label'>계기정수(Pulse/kWh)</label>"+
      "<div class='col-md-3'><input type='text' class='form-control'></div>"+
      "</div>"+
      "<div class='row mb-3'>"+
      "<label class='col-md-3 col-form-label'>LP송수신채널수</label>"+
      "<div class='col-md-3'><input type='text' class='form-control'></div>"+
      "<label class='col-md-3 col-form-label'>LP수신채널수</label>"+
      "<div class='col-md-3'><input type='text' class='form-control'></div>"+
      "</div>"+
      "<div class='row mb-3'>"+
      "<label class='col-md-3 col-form-label'>전력손실</label>"+
      "<div class='col-md-3'><input type='text' class='form-control'></div>"+
      "<label class='col-md-3 col-form-label'>재질</label>"+
      "<div class='col-md-3'><input type='text' class='form-control'></div>"+
      "</div>"+
      "<div class='row mb-3'>"+
      "<label class='col-md-3 col-form-label'>치수(mm)</label>"+
      "<div class='col-md-2'><input type='text' class='form-control'></div>"+
      "<label class='col-md-1 col-form-label'><p class='p-text-center'>*</p></label>"+
      "<div class='col-md-2'><input type='text' class='form-control'></div>"+
      "<label class='col-md-1 col-form-label'><p class='p-text-center'>*</p></label>"+
      "<div class='col-md-2'><input type='text' class='form-control'></div>"+
      "</div>"+
      "<div class='row mb-3'>"+
      "<label class='col-md-3 col-form-label'>무게(Kg)</label>"+
      "<div class='col-md-4'><input type='text' class='form-control'></div>"+
      "</div>"+
      "<div class='row mb-3'>"+
      "<label class='col-md-3 col-form-label'>제품보증기간(개월)</label>"+
      "<div class='col-md-3'><input type='text' class='form-control'></div>"+
      "<label class='col-md-3 col-form-label'>성능보증기간(개월)</label>"+
      "<div class='col-md-3'><input type='text' class='form-control'></div>"+
      "</div>"+
      "<div class='row mb-3'>"+
      "<label for='inputEmail3' class='col-md-3 col-form-label'>참고 사항</label>"+
      "<div class='col-md-9'><textarea class='form-control' id='floatingTextarea' style='height: 100px;'></textarea></div>"+
      "</div>"+
      "<div class='row mb-3'>"+
      "<label for='inputEmail3' class='col-md-3 col-form-label'>제품사진</label>"+
      "<div class='col-md-6'><img src='./mk/img/i-ims.png' class='img-fluid rounded-start'></div>"+
      "<div class='col-md-3'><button type='button' class='btn btn-seacch'>사진추가</button></div>"+
      "</div>"; 
    }

    AdId.appendChild(addDiv);
  }

  function facilitiesChange(info){

    var AdId = document.getElementById('dethAdFormBox');
    var ReId = document.getElementById('dethReFormBox');
    ReId.remove();
    var addDiv = document.createElement('div');
    addDiv.id = 'dethReFormBox';
    if(info== '태양광 패널'){
      addDiv.innerHTML =
      "<div class='row mb-3'>"+
      "<label class='col-md-3 col-form-label'>정격출력(Wp)</label>"+
      "<div class='col-md-4'><input type='text' class='form-control'></div>"+
      "<label class='col-md-1 col-form-label'><p class='p-text-center'>~</p></label>"+
      "<div class='col-md-4'><input type='text' class='form-control'></div>"+
      "</div>"+
      "<div class='row mb-3'>"+
      "<label class='col-md-3 col-form-label'>정격출력(%)</label>"+
      "<div class='col-md-4'><input type='text' class='form-control'></div>"+
      "<label class='col-md-1 col-form-label'><p class='p-text-center'>~</p></label>"+
      "<div class='col-md-4'><input type='text' class='form-control'></div>"+
      "</div>"+
      "<div class='row mb-3'>"+
      "<label class='col-md-3 col-form-label'>입력허용(V))</label>"+
      "<div class='col-md-4'><input type='text' class='form-control'></div>"+
      "<label class='col-md-1 col-form-label'><p class='p-text-center'>~</p></label>"+
      "<div class='col-md-4'><input type='text' class='form-control'></div>"+
      "</div>"+
      "<div class='row mb-3'>"+
      "<label class='col-md-3 col-form-label'>입력허용A(A)</label>"+
      "<div class='col-md-4'><input type='text' class='form-control'></div>"+
      "<label class='col-md-1 col-form-label'><p class='p-text-center'>~</p></label>"+
      "<div class='col-md-4'><input type='text' class='form-control'></div>"+
      "</div>"+
      "<div class='row mb-3'>"+
      "<label class='col-md-3 col-form-label'>동작온도(℃)</label>"+
      "<div class='col-md-4'><input type='text' class='form-control'></div>"+
      "<label class='col-md-1 col-form-label'><p class='p-text-center'>~</p></label>"+
      "<div class='col-md-4'><input type='text' class='form-control'></div>"+
      "</div>"+
      "<div class='row mb-3'>"+
      "<label class='col-md-3 col-form-label'>동작습도(%)</label>"+
      "<div class='col-md-4'><input type='text' class='form-control'></div>"+
      "<label class='col-md-1 col-form-label'><p class='p-text-center'>~</p></label>"+
      "<div class='col-md-4'><input type='text' class='form-control'></div>"+
      "</div>"+
      "<div class='row mb-3'>"+
      "<label class='col-md-3 col-form-label'>동작풍설하중(Pa)</label>"+
      "<div class='col-md-4'><input type='text' class='form-control'></div>"+
      "<label class='col-md-1 col-form-label'><p class='p-text-center'>~</p></label>"+
      "<div class='col-md-4'><input type='text' class='form-control'></div>"+
      "</div>"+
      "<div class='row mb-3'>"+
      "<label class='col-md-3 col-form-label'>온도계수</label>"+
      "<div class='col-md-4'><input type='text' class='form-control'></div>"+
      "</div>"+
      "<div class='row mb-3'>"+
      "<label class='col-md-3 col-form-label'>치수(mm)</label>"+
      "<div class='col-md-2'><input type='text' class='form-control'></div>"+
      "<label class='col-md-1 col-form-label'><p class='p-text-center'>*</p></label>"+
      "<div class='col-md-2'><input type='text' class='form-control'></div>"+
      "<label class='col-md-1 col-form-label'><p class='p-text-center'>*</p></label>"+
      "<div class='col-md-2'><input type='text' class='form-control'></div>"+
      "</div>"+
      "<div class='row mb-3'>"+
      "<label class='col-md-3 col-form-label'>무게(Kg)</label>"+
      "<div class='col-md-4'><input type='text' class='form-control'></div>"+
      "</div>"+
      "<div class='row mb-3'>"+
      "<label class='col-md-3 col-form-label'>제품보증기간(개월)</label>"+
      "<div class='col-md-4'><input type='text' class='form-control'></div>"+
      "</div>"+
      "<div class='row mb-3'>"+
      "<label class='col-md-3 col-form-label'>성능보증기간(개월)</label>"+
      "<div class='col-md-4'><input type='text' class='form-control'></div>"+
      "<div class='col-md-4'><input type='text' class='form-control'></div>"+
      "<label class='col-md-1 col-form-label'><p class='p-text-left'>%</p></label>"+
      "</div>"+
      "<div class='row mb-3'>"+
      "<label for='inputEmail3' class='col-md-3 col-form-label'>참고 사항</label>"+
      "<div class='col-md-9'>"+
      "<textarea class='form-control' id='floatingTextarea' style='height: 100px;'></textarea>"+
      "</div>"+
      "</div>"+
      "<div class='row mb-3'>"+
      "<label for='inputEmail3' class='col-md-3 col-form-label'>제품사진</label>"+
      "<div class='col-md-6'>"+
      "<img src='./mk/img/i-ims.png' class='img-fluid rounded-start'>"+
      "</div>"+
      "<div class='col-md-3'><button type='button' class='btn btn-seacch'>사진추가</button></div>"+
      "</div>";
    }else if(info== '인버터'){
      addDiv.innerHTML =
      "<div class='row mb-3'>"+
      "<label class='col-md-3 col-form-label'>최대입력전압(V)</label>"+
      "<div class='col-md-3'><input type='text' class='form-control'></div>"+
      "<label class='col-md-3 col-form-label'>최대입력전류(A)</label>"+
      "<div class='col-md-3'><input type='text' class='form-control'></div>"+
      "</div>"+
      "<div class='row mb-3'>"+
      "<label class='col-md-3 col-form-label'>최대입력전력(W)</label>"+
      "<div class='col-md-3'><input type='text' class='form-control'></div>"+
      "<label class='col-md-3 col-form-label'>최대단락전류(A)</label>"+
      "<div class='col-md-3'><input type='text' class='form-control'></div>"+
      "</div>"+
      "<div class='row mb-3'>"+
      "<label class='col-md-3 col-form-label'>기동전압(V)</label>"+
      "<div class='col-md-3'><input type='text' class='form-control'></div>"+
      "<label class='col-md-3 col-form-label'>정격입력전압(V)</label>"+
      "<div class='col-md-3'><input type='text' class='form-control'></div>"+
      "</div>"+
      "<div class='row mb-3'>"+   
      "<label class='col-md-3 col-form-label'>정격출력전력(W)</label>"+
      "<div class='col-md-3'><input type='text' class='form-control'></div>"+
      "<label class='col-md-3 col-form-label'>정격출력전압(V)</label>"+
      "<div class='col-md-3'><input type='text' class='form-control'></div>"+
      "</div>"+
      "<div class='row mb-3'>"+
      "<label class='col-md-3 col-form-label'>정격출력주파수(Hz)</label>"+
      "<div class='col-md-3'><input type='text' class='form-control'></div>"+
      "<label class='col-md-3 col-form-label'>MPPT 제어기 수</label>"+
      "<div class='col-md-3'><input type='text' class='form-control'></div>"+
      "</div>"+   
      "<div class='row mb-3'>"+
      "<label class='col-md-3 col-form-label'>MPPT 당 스트링 수</label>"+
      "<div class='col-md-3'><input type='text' class='form-control'></div>"+
      "<label class='col-md-3 col-form-label'>최대출력전력(W)</label>"+
      "<div class='col-md-3'><input type='text' class='form-control'></div>"+
      "</div>"+
      "<div class='row mb-3'>"+
      "<label class='col-md-3 col-form-label'>최대출력전류(A)</label>"+
      "<div class='col-md-3'><input type='text' class='form-control'></div>"+
      "<label class='col-md-3 col-form-label'><P style='font-size: 14px;'>최대출력피상전력(W)</P></label>"+
      "<div class='col-md-3'><input type='text' class='form-control'></div>"+ 
      "</div>"+
      "<div class='row mb-3'>"+
      "<label class='col-md-3 col-form-label'>최대효율(%)</label>"+
      "<div class='col-md-3'><input type='text' class='form-control'></div>"+
      "<label class='col-md-3 col-form-label'>유로효율(%)</label>"+
      "<div class='col-md-3'><input type='text' class='form-control'></div>"+
      "</div>"+  
      "<div class='row mb-3'>"+ 
      "<label class='col-md-3 col-form-label'>동작온도(℃)</label>"+
      "<div class='col-md-3'><input type='text' class='form-control'></div>"+
      "<label class='col-md-3 col-form-label'><p class='p-text-center'>~</p></label>"+
      "<div class='col-md-3'><input type='text' class='form-control'></div>"+
      "</div>"+
      "<div class='row mb-3'>"+
      "<label class='col-md-3 col-form-label'>상대습도(%)</label>"+  
      "<div class='col-md-3'><input type='text' class='form-control'></div>"+
      "<label class='col-md-3 col-form-label'><p class='p-text-center'>~</p></label>"+
      "<div class='col-md-3'><input type='text' class='form-control'></div>"+
      "</div>"+
      "<div class='row mb-3'>"+
      "<label class='col-md-3 col-form-label'>치수(mm)</label>"+
      "<div class='col-md-2'><input type='text' class='form-control'></div>"+  
      "<label class='col-md-1 col-form-label'><p class='p-text-center'>*</p></label>"+
      "<div class='col-md-2'><input type='text' class='form-control'></div>"+
      "<label class='col-md-1 col-form-label'><p class='p-text-center'>*</p></label>"+
      "<div class='col-md-2'><input type='text' class='form-control'></div>"+
      "</div>"+
      "<div class='row mb-3'>"+
      "<label class='col-md-3 col-form-label'>무게(Kg)</label>"+    
      "<div class='col-md-4'><input type='text' class='form-control'></div>"+
      "</div>"+  
      "<div class='row mb-3'>"+
      "<label class='col-md-3 col-form-label'>IP 등급</label>"+
      "<div class='col-md-3'><input type='text' class='form-control'></div>"+
      "<label class='col-md-2 col-form-label'>변압 방식</label>"+
      "<div class='col-md-3'><input type='text' class='form-control'></div>"+
      "</div>"+
      "<div class='row mb-3'>"+        
      "<label class='col-md-3 col-form-label'>제품보증기간(개월)</label>"+
      "<div class='col-md-4'><input type='text' class='form-control'></div>"+  
      "</div>"+
      "<div class='row mb-3'>"+
      "<label class='col-md-3 col-form-label'>성능보증기간(개월)</label>"+
      "<div class='col-md-4'><input type='text' class='form-control'></div>"+
      "<div class='col-md-4'><input type='text' class='form-control'></div>"+
      "<label class='col-md-1 col-form-label'><p class='p-text-left'>%</p></label>"+
      "</div>"+          
      "<div class='row mb-3'>"+
      "<label for='inputEmail3' class='col-md-3 col-form-label'>참고 사항</label>"+  
      "<div class='col-md-9'><textarea class='form-control' id='floatingTextarea' style='height: 100px;'></textarea></div>"+
      "</div>"+
      "<div class='row mb-3'>"+
      "<label for='inputEmail3' class='col-md-3 col-form-label'>제품사진</label>"+
      "<div class='col-md-6'><img src='./mk/img/i-ims.png' class='img-fluid rounded-start'></div>"+
      "<div class='col-md-3'><button type='button' class='btn btn-seacch'>사진추가</button></div>"+
      "</div>"; 
    }else if(info== '전력 계량기'){
      addDiv.innerHTML =
      "<div class='row mb-3'>"+
      "<label class='col-md-3 col-form-label'>TYPE</label>"+
      "<div class='col-md-3'><input type='text' class='form-control'></div>"+
      "<label class='col-md-3 col-form-label'>상/선식</label>"+
      "<div class='col-md-3'><input type='text' class='form-control'></div>"+
      "</div>"+
      "<div class='row mb-3'>"+
      "<label class='col-md-3 col-form-label'>정격전압(V)</label>"+
      "<div class='col-md-3'><input type='text' class='form-control'></div>"+
      "<label class='col-md-3 col-form-label'>정격전류(A)</label>"+
      "<div class='col-md-3'><input type='text' class='form-control'></div>"+
      "</div>"+
      "<div class='row mb-3'>"+
      "<label class='col-md-3 col-form-label'>정격주파수(Hz)</label>"+
      "<div class='col-md-3'><input type='text' class='form-control'></div>"+
      "</div>"+
      "<div class='row mb-3'>"+
      "<label class='col-md-3 col-form-label'>정밀도(Class)</label>"+
      "<div class='col-md-3'><input type='text' class='form-control'></div>"+
      "<label class='col-md-3 col-form-label'>계기정수(Pulse/kWh)</label>"+
      "<div class='col-md-3'><input type='text' class='form-control'></div>"+
      "</div>"+
      "<div class='row mb-3'>"+
      "<label class='col-md-3 col-form-label'>LP송수신채널수</label>"+
      "<div class='col-md-3'><input type='text' class='form-control'></div>"+
      "<label class='col-md-3 col-form-label'>LP수신채널수</label>"+
      "<div class='col-md-3'><input type='text' class='form-control'></div>"+
      "</div>"+
      "<div class='row mb-3'>"+
      "<label class='col-md-3 col-form-label'>전력손실</label>"+
      "<div class='col-md-3'><input type='text' class='form-control'></div>"+
      "<label class='col-md-3 col-form-label'>재질</label>"+
      "<div class='col-md-3'><input type='text' class='form-control'></div>"+
      "</div>"+
      "<div class='row mb-3'>"+
      "<label class='col-md-3 col-form-label'>치수(mm)</label>"+
      "<div class='col-md-2'><input type='text' class='form-control'></div>"+
      "<label class='col-md-1 col-form-label'><p class='p-text-center'>*</p></label>"+
      "<div class='col-md-2'><input type='text' class='form-control'></div>"+
      "<label class='col-md-1 col-form-label'><p class='p-text-center'>*</p></label>"+
      "<div class='col-md-2'><input type='text' class='form-control'></div>"+
      "</div>"+
      "<div class='row mb-3'>"+
      "<label class='col-md-3 col-form-label'>무게(Kg)</label>"+
      "<div class='col-md-4'><input type='text' class='form-control'></div>"+
      "</div>"+
      "<div class='row mb-3'>"+
      "<label class='col-md-3 col-form-label'>제품보증기간(개월)</label>"+
      "<div class='col-md-3'><input type='text' class='form-control'></div>"+
      "<label class='col-md-3 col-form-label'>성능보증기간(개월)</label>"+
      "<div class='col-md-3'><input type='text' class='form-control'></div>"+
      "</div>"+
      "<div class='row mb-3'>"+
      "<label for='inputEmail3' class='col-md-3 col-form-label'>참고 사항</label>"+
      "<div class='col-md-9'><textarea class='form-control' id='floatingTextarea' style='height: 100px;'></textarea></div>"+
      "</div>"+
      "<div class='row mb-3'>"+
      "<label for='inputEmail3' class='col-md-3 col-form-label'>제품사진</label>"+
      "<div class='col-md-6'><img src='./mk/img/i-ims.png' class='img-fluid rounded-start'></div>"+
      "<div class='col-md-3'><button type='button' class='btn btn-seacch'>사진추가</button></div>"+
      "</div>"; 
    }

    AdId.appendChild(addDiv);

    zdocument.getElementById('facilitiesState').value = info;
      
  }